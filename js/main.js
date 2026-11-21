(() => {
  'use strict';
  const data = window.PortfolioData;
  if (!data) return;
  const root = document.body.dataset.root || './';
  const detail = document.body.dataset.page === 'project';
  const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const local = path => root + path;
  const external = url => {
    try { return new URL(url).protocol === 'https:'; } catch { return false; }
  };
  const externalAttrs = 'target="_blank" rel="noopener noreferrer"';
  const tags = items => items.map(item => `<span class="tag">${esc(item)}</span>`).join('');
  const fill = (selector, markup) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = markup;
  };
  const home = detail ? local('index.html') : '';

  fill('[data-header]', `<div class="container header-inner">
    <a class="wordmark" href="${local('index.html')}" aria-label="${esc(data.profile.name)} 홈"><span class="brand-mark" aria-hidden="true">j.</span><span>${esc(data.profile.name)}</span></a>
    <nav aria-label="주 메뉴"><a href="${home}#about">About</a><a href="${home}#projects"${detail ? ' aria-current="page"' : ''}>Projects</a><a href="${home}#skills">Skills</a><a href="${home}#contact">Contact</a></nav>
  </div>`);
  fill('[data-footer]', `<div class="container footer-inner"><p>© ${new Date().getFullYear()} ${esc(data.profile.name)}</p><span>생각을 코드로, 경험을 기록으로.</span><a href="#top">맨 위로</a></div>`);
  document.querySelectorAll('[data-profile-name]').forEach(el => { el.textContent = data.profile.name; });
  const github = document.querySelector('[data-hero-github]');
  if (github && external(data.profile.github)) {
    github.outerHTML = `<a class="button button-secondary" href="${esc(data.profile.github)}" ${externalAttrs}>GitHub<span class="sr-only"> (새 탭)</span></a>`;
  }

  fill('[data-projects]', data.projects.map(project => `<article class="project-card">
    <a class="project-cover" href="${esc(local(project.page))}" aria-label="${esc(project.name)} 프로젝트 상세 보기"><img src="${esc(local(project.cover))}" alt="${esc(project.coverAlt)}" width="1200" height="900" loading="lazy">${project.coverIsPlaceholder ? '<span class="cover-caption">소개 그래픽 · 실제 앱 화면 준비 중</span>' : ''}</a>
    <div class="project-info"><p class="eyebrow">${esc(project.category)}</p><h3><a href="${esc(local(project.page))}">${esc(project.name)}</a><span>${esc(project.koreanName)}</span></h3><p class="project-tagline">${esc(project.tagline)}</p><p class="muted">${esc(project.description)}</p><dl class="project-summary"><div><dt>문제 정의</dt><dd>${esc(project.problem || "문제 정의 작성 예정")}</dd></div><div><dt>담당 역할</dt><dd>${esc(project.role || "실제 담당 업무 확인 후 추가 예정")}</dd></div><div><dt>사용 기술</dt><dd><div class="tags" aria-label="주요 기술">${tags(project.tags)}</div></dd></div></dl><a class="text-link" href="${esc(local(project.page))}">프로젝트 자세히 보기</a></div>
  </article>`).join(''));
  fill('[data-skills]', data.skills.map(skill => `<div class="skill-row"><h3>${esc(skill.category)}</h3><div class="skill-items">${skill.items.map(item => `<span>${esc(item)}</span>`).join('')}</div></div>`).join(''));

  const contacts = [
    { title: 'GitHub', value: data.profile.github, placeholder: 'GitHub 주소 등록 예정', type: 'url' },
    { title: 'Email', value: data.profile.email, placeholder: '이메일 등록 예정', type: 'email' },
    { title: 'Resume', value: data.profile.resume, placeholder: '이력서 PDF 준비 중', type: 'file' },
  ];
  fill('[data-contact]', contacts.map(item => {
    const label = `<span class="contact-label">${item.title}</span>`;
    if (!item.value) return `<div class="contact-item">${label}<span class="contact-value muted">${item.placeholder}</span><span class="availability">준비 중</span></div>`;
    if (item.type === 'url' && external(item.value)) return `<a class="contact-item" href="${esc(item.value)}" ${externalAttrs}>${label}<span class="contact-value">GitHub 프로필<span class="sr-only"> (새 탭)</span></span><span class="availability">방문하기</span></a>`;
    if (item.type === 'email' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item.value)) return `<a class="contact-item" href="mailto:${esc(item.value)}">${label}<span class="contact-value">${esc(item.value)}</span><span class="availability">메일 보내기</span></a>`;
    if (item.type === 'file' && /^(?!\/)(?!.*\.\.)[\w\-/ .]+\.pdf$/i.test(item.value)) return `<a class="contact-item" href="${esc(local(item.value))}" download>${label}<span class="contact-value">이력서 PDF</span><span class="availability">다운로드</span></a>`;
    return `<div class="contact-item">${label}<span class="muted">정보 확인 필요</span></div>`;
  }).join(''));

  if (detail) {
    const project = data.projects.find(item => item.id === document.body.dataset.project);
    if (!project) return;
    fill('[data-project-tags]', tags(project.tags));
    fill('[data-project-meta]', [
      ['Platform', 'iOS · Android'], ['Period', project.period || '개발 기간 확인 예정'], ['Team', project.team || '팀 구성 확인 예정'], ['My role', project.role || '담당 업무 확인 예정'],
    ].map(([label, value]) => `<div><dt>${label}</dt><dd>${esc(value)}</dd></div>`).join(''));
    fill('[data-personal-role]', project.contributions?.length ? `<p class="role-intro">프로젝트에서 제가 직접 맡은 업무입니다.</p><div class="contribution-list">${project.contributions.map(item => `<div><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p></div>`).join('')}</div>` : project.role ? `<p>${esc(project.role)}</p>` : '<div class="pending-panel"><span class="small-label">개인 기여 · 확인 필요</span><h3>제가 맡은 일은 구체적인 근거와 함께 정리할 예정입니다.</h3><p>담당 기능, 직접 내린 설계 결정, 해결한 기술적 문제를 확인한 뒤 추가합니다. 아래 기능과 기술은 프로젝트 전체를 기준으로 소개합니다.</p></div>');
    fill('[data-stack]', project.stack.map(item => `<div class="stack-item"><h3>${esc(item.category)}</h3><p>${item.items.map(esc).join(' · ')}</p></div>`).join(''));
    fill('[data-features]', project.screenshots.map((item, index) => `<article class="feature-card">
      <figure class="screen-figure">${item.image ? `<img src="${esc(local(item.image))}" alt="${esc(item.alt)}" width="390" height="844" loading="lazy">` : `<div class="screen-placeholder" role="img" aria-label="${esc(item.title)} 실제 스크린샷 준비 중"><span class="placeholder-icon" aria-hidden="true"></span><span>APP SCREENSHOT</span><strong>실제 화면 준비 중</strong><span class="placeholder-title">${esc(item.title)}</span></div>`}<figcaption>${item.image ? esc(item.title) + ' · 실제 앱 화면' : '이미지 미제공 · 실제 앱 화면을 추가할 영역입니다.'}</figcaption></figure>
      <div class="feature-copy"><p class="small-label">${esc(project.koreanName)}</p><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p></div>
    </article>`).join(''));
    fill('[data-project-links]', project.links.map(link => external(link.url)
      ? `<a class="resource-link" href="${esc(link.url)}" ${externalAttrs}><span><strong>${esc(link.label)}</strong><small>${esc(link.note)}</small></span><span class="resource-action">방문하기<span class="sr-only"> (새 탭)</span></span></a>`
      : `<div class="resource-link is-pending"><span><strong>${esc(link.label)}</strong><small>${esc(link.note)}</small></span><span class="resource-action">준비 중</span></div>`).join(''));
  }

  // 스크린샷 파일 누락 시 깨진 이미지 대신 명확한 안내를 표시합니다.
  document.querySelectorAll('img').forEach(img => {
    const fallback = () => {
      const message = document.createElement('div');
      message.className = 'image-fallback';
      message.textContent = '이미지를 불러올 수 없습니다. 이미지 경로를 확인해 주세요.';
      message.setAttribute('role', 'img');
      message.setAttribute('aria-label', img.alt);
      img.replaceWith(message);
    };
    img.addEventListener('error', fallback, { once: true });
    if (img.complete && img.naturalWidth === 0) fallback();
  });
})();
