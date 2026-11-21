/* 이 파일의 데이터만 바꾸면 카드, 기술 목록, 연락처에 함께 반영됩니다.
 * 경로는 사이트 루트 기준이며 맨 앞에 /를 붙이지 않습니다. */
window.PortfolioData = {
  profile: {
    name: 'Jung Jieun',
    major: 'Computer Engineering',
    interests: ['Backend', 'AI'],
    github: 'https://github.com/geun95',
    email: 'g95eun@gmail.com',
    resume: null, // 예: 'assets/resume.pdf' — 실제 파일을 추가한 뒤 설정
  },
  projects: [{
    id: 'momentory',
    name: 'Momentory',
    koreanName: '모멘토리',
    category: 'AI · MOBILE APPLICATION',
    tagline: '바바와 대화하고, 기록하고, 내일 다시 돌아보는 하루.',
    description: 'AI 캐릭터 바바와의 대화를 일기로 남기고, 감정에 맞는 쉼터와 다음 날 편지·주간 리포트로 회고를 이어 가는 모바일 서비스입니다.',
    problem: '기록을 시작하는 부담, 감정의 이유를 이해하기 어려운 점, 꾸준히 회고하기 어려운 문제를 다룹니다.',
    page: 'projects/momentory.html',
    cover: 'assets/images/momentory/home.webp',
    coverIsPlaceholder: false,
    coverAlt: 'Momentory 홈 화면. 최종보고서에 수록된 시연용 데이터입니다.',
    coverCaption: '실제 앱 화면 · 시연용 데이터',
    coverScreens: [
      { src: 'assets/images/momentory/home.webp', alt: '바바와 일정이 보이는 홈 화면', width: 576, height: 1206 },
      { src: 'assets/images/momentory/retrospect.webp', alt: '일정을 바탕으로 대화하는 AI 회고 화면', width: 341, height: 715 },
      { src: 'assets/images/momentory/letter.webp', alt: '전날의 기록과 그림을 담은 바바의 편지', width: 576, height: 1206 },
    ],
    tags: ['Java', 'Spring Boot', 'Gemini API', 'Jev', 'PostgreSQL'],
    period: '2026.06 ~ 현재',
    team: '3인 팀',
    role: 'AI · Backend',
    contributions: [
      { title: 'AI 회고·프롬프트 설계와 품질 평가', description: '회고 질문과 프롬프트를 설계하고, AI 회고 기능 개발과 LLM 프롬프트 최적화·품질 평가를 진행했습니다.' },
      { title: '감정·주제 분석과 안전 필터링', description: '사용자 발화의 감정과 주제를 분석하고, 회고 과정의 안전 필터링을 담당했습니다.' },
      { title: '개인화 실험과 분석 리포트', description: '개인화 A/B 테스트를 설계·분석하고, 분석 리포트 로직을 구현했습니다.' },
      { title: '앱 화면 구현', description: '모바일 앱의 사용자 화면 구현에 참여했습니다.' },
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
      { category: 'AI', items: ['Gemini API', 'TypeSafe Jev'] },
      { category: 'Database', items: ['PostgreSQL', 'pgvector', 'Flyway'] },
      { category: 'Infrastructure', items: ['Docker', 'AWS ECS Fargate', 'ALB', 'Amazon ECR', 'RDS'] },
      { category: 'Collaboration & CI', items: ['Git', 'GitHub', 'GitHub Actions'] },
      { category: 'Analytics & Monitoring', items: ['Amplitude', 'CloudWatch', 'Grafana'] },
    ],
    // 최종보고서 31쪽은 모든 앱 화면이 시연용 데이터임을 명시합니다.
    screenshots: [
      { title: '일정에서 시작하는 AI 회고', image: 'assets/images/momentory/retrospect.webp', width: 341, height: 715, sourcePage: 33, alt: '일정과 사용자 답변에서 사건을 정리하는 바바의 AI 회고', description: '바바가 일정이나 기억을 단서로 먼저 묻습니다. 사용자가 고른 사건의 감정과 바람을 자신의 말로 돌아보도록 대화를 이어 갑니다.' },
      { title: '내 말로 남는 일기', image: 'assets/images/momentory/diary.webp', width: 576, height: 1206, sourcePage: 34, alt: '대화에서 생성한 일기와 직접 고치기 버튼', description: '대화에서 확인한 사건과 표현을 사용자 시점의 일기로 정리합니다. 저장 전후로 본문과 감정을 수정할 수 있고, 직접 쓰기도 지원합니다.' },
      { title: '감정 맞춤 쉼터', image: 'assets/images/momentory/rest.webp', width: 576, height: 1206, sourcePage: 35, alt: '그날 감정에 맞는 감각연못 활동을 추천하는 쉼터', description: '일기의 감정에 맞춰 일곱 가지 쉼 중 하나를 추천합니다. 명상·감각연못·걱정상자 등 짧게 해 볼 수 있는 활동으로 기록 이후를 연결합니다.' },
      { title: '다음 날 오는 바바의 편지', image: 'assets/images/momentory/letter.webp', width: 576, height: 1206, sourcePage: 36, alt: '사용자의 전날 표현과 4컷 그림을 담은 바바의 편지', description: '전날 남긴 표현을 담은 편지와 바바의 4컷 그림으로 지난 하루를 다시 만납니다. 편지를 만들기 전에는 안전 정책을 확인합니다.' },
      { title: '한 주를 엮는 리포트', image: 'assets/images/momentory/weekly.webp', width: 341, height: 715, sourcePage: 38, alt: '한 주에 기록한 감정과 있었던 일을 정리한 주간 리포트', description: '한 주의 기록을 여섯 쪽으로 엮습니다. 남겼던 말, 감정과 사건, 괜찮았던 순간, 해낸 일을 다시 살펴봅니다.' },
      { title: '바바와 함께 쌓는 습관', image: 'assets/images/momentory/customize.webp', width: 576, height: 1206, sourcePage: 39, alt: '모은 귤로 바바의 옷과 모자를 고르는 꾸미기 화면', description: '일기·쉼터·편지 미션과 출석으로 귤을 모아 바바를 꾸밉니다. 꾸민 바바가 홈과 회고에도 나타나 다시 찾아올 이유를 만듭니다.' },
    ],
  }],
  // 사용자가 직접 사용했다고 확인한 기술만 표시합니다. 숙련도 수치는 부여하지 않습니다.
  skills: [
    { category: 'Languages', items: ['Java'] },
    { category: 'Backend', items: ['Spring Boot'] },
    { category: 'AI / ML', items: ['Gemini API', 'Jev'] },
    { category: 'Database', items: ['PostgreSQL'] },
    { category: 'DevOps & Tools', items: ['Docker', 'Git', 'GitHub'] },
  ],
};
