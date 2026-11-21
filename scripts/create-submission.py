#!/usr/bin/env python3
"""실제 배포된 포트폴리오를 확인한 뒤 제출용 URL 한 줄 TXT를 생성합니다."""
import argparse
from pathlib import Path
from urllib.error import URLError
from urllib.parse import urlsplit
from urllib.request import Request, urlopen

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--name', required=True, help='과제 제출자 이름')
parser.add_argument('--url', required=True, help='실제 배포 URL')
args = parser.parse_args()
name = args.name.strip()
url = args.url.strip()
if not name or any(char in name for char in '/\\\n\r\0') or name in ('.', '..'):
    parser.error('파일명에 사용할 수 있는 이름을 입력하세요.')
parts = urlsplit(url)
if parts.scheme != 'https' or not parts.hostname or parts.username or parts.password or parts.query or parts.fragment:
    parser.error('쿼리·인증 정보가 없는 실제 HTTPS 사이트 URL을 입력하세요.')
try:
    with urlopen(Request(url, headers={'User-Agent': 'Portfolio-Submission-Check/1.0'}), timeout=20) as response:
        html = response.read(2_000_000).decode('utf-8')
        if response.status != 200 or 'data-page="home"' not in html or 'DEVELOPER PORTFOLIO' not in html:
            raise ValueError('포트폴리오 메인 페이지가 확인되지 않았습니다.')
except (URLError, ValueError, UnicodeError, TimeoutError) as error:
    raise SystemExit(f'제출 파일을 만들지 않았습니다. 배포 상태를 확인하세요: {error}')
folder = Path(__file__).resolve().parents[1] / 'submission'
folder.mkdir(exist_ok=True)
output = folder / f'{name}-공작과제-06.txt'
output.write_text(url + '\n', encoding='utf-8')
print(output)
