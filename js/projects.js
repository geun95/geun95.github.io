/* 이 파일의 데이터만 바꾸면 카드, 기술 목록, 연락처에 함께 반영됩니다.
 * 경로는 사이트 루트 기준이며 맨 앞에 /를 붙이지 않습니다. */
window.PortfolioData = {
  profile: {
    name: 'Jung Jieun',
    major: 'Computer Engineering',
    interests: ['Backend', 'AI'],
    github: 'https://github.com/geun95',
    email: null,
    resume: null, // 예: 'assets/resume.pdf' — 실제 파일을 추가한 뒤 설정
  },
  projects: [{
    id: 'momentory',
    name: 'Momentory',
    koreanName: '모멘토리',
    category: 'AI · MOBILE APPLICATION',
    tagline: '대화로 돌아보고, 기록으로 이해하는 나의 하루.',
    description: '일정과 경험을 바탕으로 AI와 대화하며 감정을 탐색하고, 일기와 주간 리포트로 일상을 돌아보는 모바일 서비스입니다.',
    problem: '무엇부터 기록할지 막막한 순간, 경험에 담긴 감정을 구체적으로 정리하기 어렵다는 문제에서 시작합니다.',
    page: 'projects/momentory.html',
    cover: 'assets/images/momentory/cover.svg',
    coverIsPlaceholder: true,
    coverAlt: 'Momentory 프로젝트 소개 그래픽. 실제 앱 화면은 준비 중입니다.',
    tags: ['React Native', 'Spring Boot', 'Gemini', 'PostgreSQL'],
    period: '2026.06 ~ 현재',
    team: '3인 팀',
    role: 'AI 회고·개인화 실험·앱 화면 구현',
    contributions: [
      { title: 'AI 회고 기획·개발', description: '일정과 경험을 바탕으로 하루를 돌아보는 AI 회고 기능을 기획하고 개발했습니다.' },
      { title: 'LLM 프롬프트 최적화·품질 평가', description: 'LLM 프롬프트를 최적화하고 응답의 품질을 평가했습니다.' },
      { title: '개인화 A/B 테스트 설계·분석', description: '개인화 기능을 위한 A/B 테스트를 설계하고 결과를 분석했습니다.' },
      { title: '앱 화면 구현', description: '모바일 앱의 사용자 화면을 구현했습니다.' },
    ],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/kr/app/%EB%AA%A8%EB%A9%98%ED%86%A0%EB%A6%AC-%EA%B0%90%EC%A0%95-%EC%9D%BC%EA%B8%B0-%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC-%EB%A9%98%ED%83%88-%EA%B4%80%EB%A6%AC/id6804971733?platform=ipad', note: 'iOS 앱' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=kr.momentory.app', note: 'Android 앱' },
      { label: 'GitHub Repository', url: 'https://github.com/soma-momentory/momentory-be', note: '팀 백엔드 저장소' },
      { label: 'Demo Video', url: null, note: '영상 준비 중' },
    ],
    stack: [
      { category: 'Frontend', items: ['TypeScript', 'React Native', 'Expo'] },
      { category: 'Backend', items: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring Security'] },
      { category: 'AI', items: ['Gemini API'] },
      { category: 'Database', items: ['PostgreSQL', 'Flyway'] },
      { category: 'Infrastructure', items: ['Docker'] },
      { category: 'Collaboration', items: ['Git', 'GitHub'] },
    ],
    // image에 실제 스크린샷 경로를 넣으세요. null이면 준비 중 영역을 표시합니다.
    screenshots: [
      { title: '일정 기반 AI 회고', image: null, alt: '일정을 바탕으로 AI와 대화하는 회고 화면', description: '오늘의 일정과 경험에서 대화를 시작합니다. 무엇을 써야 할지 막막한 순간에도 질문에 답하며 하루를 돌아볼 수 있습니다.' },
      { title: '감정 탐색', image: null, alt: '감정의 종류와 강도를 살펴보는 화면', description: '경험에 담긴 감정과 그 강도를 살펴봅니다. 막연했던 기분을 구체적인 언어로 이해하도록 돕습니다.' },
      { title: '일기와 리프레이밍', image: null, alt: '원본 일기와 리프레이밍 일기를 확인하는 화면', description: '원래의 경험을 담은 일기와 다른 관점에서 돌아본 일기를 확인합니다. 같은 하루를 새로운 시선으로 읽어볼 수 있습니다.' },
      { title: '바람카드와 행동 회고', image: null, alt: '바람카드와 행동 회고 화면', description: '대화에서 발견한 바람을 작은 행동으로 연결하고, 실행한 경험을 다시 돌아봅니다.' },
      { title: '쉼터', image: null, alt: '호흡과 수면 루틴, 마음챙김을 위한 쉼터 화면', description: '호흡, 수면 루틴, 마음챙김 등 잠시 쉬어갈 수 있는 활동을 제공합니다.' },
      { title: '주간 감정 리포트', image: null, alt: '한 주의 감정 변화를 돌아보는 리포트 화면', description: '쌓인 기록을 주간 리포트로 돌아봅니다. 하루의 감정을 넘어 시간에 따른 변화를 살펴볼 수 있습니다.' },
    ],
  }],
  // 프로젝트에서 확인된 기술입니다. 개인별 기여·숙련도를 뜻하지 않습니다.
  skills: [
    { category: 'Languages', items: ['Java', 'TypeScript'] },
    { category: 'Backend', items: ['Spring Boot', 'Spring Data JPA', 'Spring Security'] },
    { category: 'AI / ML', items: ['Gemini API'] },
    { category: 'Database', items: ['PostgreSQL', 'Flyway'] },
    { category: 'DevOps & Tools', items: ['Docker', 'Git', 'GitHub'] },
    { category: 'Mobile', items: ['React Native', 'Expo'] },
  ],
};
