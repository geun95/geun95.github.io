#!/usr/bin/env python3
"""외부 패키지 없이 HTML·데이터의 내부 링크와 파일, SEO 기본값을 검사합니다."""
import json
import subprocess
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
errors = []


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.ids, self.refs = path, set(), []
        self.h1 = self.title = self.description = self.lang = False
        self.feed(path.read_text(encoding='utf-8'))

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            if attrs['id'] in self.ids:
                errors.append(f'{self.path.name}: duplicate id {attrs["id"]}')
            self.ids.add(attrs['id'])
        if tag == 'html': self.lang = attrs.get('lang') == 'ko'
        if tag == 'h1': self.h1 = True
        if tag == 'title': self.title = True
        if tag == 'meta' and attrs.get('name') == 'description':
            self.description = bool(attrs.get('content'))
        if tag == 'img' and not attrs.get('alt'):
            errors.append(f'{self.path.name}: image alt missing')
        if tag in ('a', 'link', 'script', 'img'):
            ref = attrs.get('src') or attrs.get('href')
            if ref: self.refs.append(ref)


pages = {path.resolve(): Page(path) for path in ROOT.rglob('*.html') if '.qa' not in path.parts}


def check_ref(origin, ref):
    url = urlsplit(ref)
    if url.scheme or url.netloc: return
    if url.path.startswith('/'):
        errors.append(f'{origin.name}: root-absolute URL {ref}')
        return
    target = (origin.parent / unquote(url.path)).resolve() if url.path else origin.resolve()
    if not target.is_relative_to(ROOT):
        errors.append(f'{origin.name}: path escapes site {ref}')
        return
    if not target.is_file():
        errors.append(f'{origin.name}: missing target {ref}')
    elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
        errors.append(f'{origin.name}: missing anchor {ref}')


for path, page in pages.items():
    for name in ('h1', 'title', 'description', 'lang'):
        if not getattr(page, name): errors.append(f'{path.name}: missing {name}')
    for ref in page.refs: check_ref(path, ref)

script = "const fs=require('node:fs'),vm=require('node:vm');const c={window:{}};vm.runInNewContext(fs.readFileSync(process.argv[1],'utf8'),c);process.stdout.write(JSON.stringify(c.window.PortfolioData));"
data = json.loads(subprocess.check_output(['node', '-e', script, str(ROOT / 'js/projects.js')], text=True))
ids = set()
for project in data['projects']:
    if project['id'] in ids: errors.append('duplicate project id')
    ids.add(project['id'])
    check_ref(ROOT / 'index.html', project['page'])
    check_ref(ROOT / 'index.html', project['cover'])
    if not project.get('coverAlt'): errors.append('missing project coverAlt')
    detail = (ROOT / project['page']).read_text(encoding='utf-8')
    if f'data-project="{project["id"]}"' not in detail: errors.append('detail project id mismatch')
    for screen in project.get('screenshots', []):
        if screen.get('image'): check_ref(ROOT / 'index.html', screen['image'])
        if not screen.get('alt'): errors.append('missing screenshot alt')
if data['profile'].get('resume'): check_ref(ROOT / 'index.html', data['profile']['resume'])

if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} HTML pages, {len(ids)} project(s), internal links, assets, anchors, metadata and image descriptions.')
