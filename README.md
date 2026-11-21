# Jung Jieun · Developer Portfolio

미니멀 화이트 디자인의 정적 개발자 포트폴리오입니다. 현재 프로젝트는 **Momentory 한 개**이며, 개인 프로필 README와 별도로 운영합니다.

- 배포 대상 저장소: <https://github.com/geun95/geun95.github.io>
- 사이트 주소: <https://geun95.github.io/> (배포 후 접속 확인)
- HTML / CSS / JavaScript만 사용합니다. 패키지 설치나 빌드가 필요 없습니다.
- 메인 소개와 프로젝트 상세 페이지를 분리했습니다.
- 공통 헤더·푸터·카드·기술 목록·연락처는 같은 데이터를 사용합니다.

## 파일 구조

```text
index.html                      메인 페이지
projects/momentory.html          Momentory 상세 페이지
css/style.css                   공통 디자인 변수·반응형·인쇄 스타일
js/projects.js                  프로필·프로젝트·기술·링크·이미지 데이터
js/main.js                      공통 요소와 데이터 렌더링
assets/favicon.svg              사이트 아이콘
assets/images/momentory/cover.svg 소개 그래픽 (앱 화면 아님)
docs/CONTENT-CHECKLIST.md        보완할 정보와 콘텐츠 출처
scripts/check-site.py            내부 링크·이미지·메타데이터 검사
scripts/create-submission.py     실제 URL 확인 후 제출 TXT 생성
submission/                     제출 파일 저장 위치
.nojekyll                       GitHub Pages 정적 파일 게시 설정
```

## 로컬 실행

이 폴더에서 실행합니다.

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

브라우저에서 <http://127.0.0.1:8766/>에 접속합니다. 종료는 `Ctrl+C`입니다. `index.html`을 직접 열어도 동작하도록 외부 라이브러리·모듈 import·fetch를 사용하지 않았습니다.

검사:

```sh
node --check js/projects.js
node --check js/main.js
python3 scripts/check-site.py
```

## 프로필과 연락처 수정

`js/projects.js`의 `profile`에서 이름·GitHub·이메일·이력서를 바꿉니다. 이름이나 소개가 바뀌면 검색엔진과 JavaScript 비활성화 환경을 위한 HTML의 제목, 메타 설명, 본문 기본값도 함께 수정합니다.

```js
profile: {
  name: 'Jung Jieun',
  github: 'https://github.com/geun95',
  email: null,
  resume: null,
}
```

이메일은 실제 주소로, 이력서는 실제 PDF 파일을 `assets/resume.pdf`에 넣은 뒤 `resume: 'assets/resume.pdf'`로 설정합니다. `null`은 클릭할 수 있는 가짜 링크 대신 준비 중 표시를 만듭니다. 파일이 없으면 다운로드 링크를 설정하지 마세요.

## 새 프로젝트 추가

1. `js/projects.js`의 `projects` 배열에 Momentory 객체를 복사하고 새 프로젝트 정보를 입력합니다.
2. `id`는 중복되지 않는 영문 소문자와 하이픈으로, `page`는 `projects/새프로젝트.html`로 설정합니다.
3. `cover`, `coverAlt`, `coverIsPlaceholder`, 기술 태그와 실제 링크를 입력합니다. 경로 맨 앞에 `/`를 붙이지 않습니다.
4. `projects/momentory.html`을 복사해 새 상세 HTML을 만듭니다.
5. 새 HTML의 `data-project`를 새 `id`로 바꾸고 소개·문제·해결·역할·결과, `<title>`, description, OG와 canonical URL을 수정합니다.
6. 이미지와 링크를 검사합니다. **메인 페이지 카드와 공통 UI는 별도 수정 없이 자동 추가됩니다.**

개별 프로젝트의 서사는 HTML에, 재사용하는 구조화 정보는 데이터 파일에 둡니다. 프레임워크나 빌드 도구 없이 관리할 수 있습니다.

## 실제 스크린샷으로 교체

1. 개인정보가 제거된 실제 앱 화면을 `assets/images/momentory/`에 추가합니다. WebP나 최적화된 PNG/JPEG를 권장합니다.
2. `screenshots` 각 항목의 `image: null`을 `'assets/images/momentory/retrospect.webp'` 같은 경로로 바꿉니다.
3. 해당 화면을 구체적으로 설명하는 `alt`를 작성합니다.
4. 대표 이미지도 교체하려면 `cover`, `coverAlt`를 바꾸고 `coverIsPlaceholder: false`로 설정합니다.
5. 상세 상단 커버는 고정 HTML이므로 `projects/momentory.html`의 `detail-cover` 이미지 경로·alt·캡션도 바꿉니다.

현재 그래픽은 실제 앱 UI를 흉내 내지 않는 소개용 SVG이며, 6개 기능 화면은 명시적인 이미지 준비 중 영역입니다. 이미지가 없거나 로드되지 않으면 안내를 표시합니다. 실제 크기가 다른 스크린샷은 `main.js`의 이미지 width/height 비율도 조정할 수 있습니다.

## GitHub Pages 배포

저장소는 이미 만들어진 `geun95/geun95.github.io`를 사용합니다. 기존 GitHub 프로필 저장소 `geun95/geun95`의 README는 수정하지 않습니다.

Git 저장소 연결이 아직 없을 경우 이 폴더에서:

```sh
git init -b main
git remote add origin https://github.com/geun95/geun95.github.io.git
git add index.html projects css js assets docs scripts submission README.md .gitignore .nojekyll
git commit -m "Build developer portfolio with Momentory case study"
git push -u origin main
```

이미 Git이 연결되어 있으면 `git init`과 remote 추가를 건너뛰고 `git status`와 `git remote -v`부터 확인하세요. 원격 저장소에 기존 커밋이 있다면 먼저 내용을 확인하고 병합하며 강제 푸시하지 않습니다.

GitHub에서:

1. 대상 저장소 → **Settings → Pages**.
2. **Build and deployment → Source → Deploy from a branch**.
3. **Branch → main**, 폴더 **/(root)** → **Save**.
4. Actions의 Pages 배포가 완료되면 <https://geun95.github.io/>를 확인합니다.
5. 상세 페이지 <https://geun95.github.io/projects/momentory.html>도 직접 열어봅니다.

GitHub의 [Pages 빠른 시작](https://docs.github.com/en/pages/quickstart)과 [게시 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)을 기준으로 작성했습니다. 배포 반영까지 시간이 걸릴 수 있습니다.

별도 빌드나 GitHub Actions 사용자 워크플로가 필요 없습니다. 사용자 사이트 저장소 이름이 `geun95.github.io`여서 URL 루트에서 서비스됩니다. 다른 프로젝트 저장소로 옮겨도 상대 경로는 유지되지만 canonical·OG URL과 제출 URL은 바꿔야 합니다.

## 과제 제출용 TXT

실제 배포 완료 후 실행합니다.

```sh
python3 scripts/create-submission.py --name 'Jung Jieun' --url https://geun95.github.io/
```

HTTP 응답과 포트폴리오 내용이 확인된 경우에만 `submission/Jung Jieun-공작과제-06.txt`를 생성합니다. 파일 내용은 사이트 URL 한 줄입니다. 과제에서 한글 실명을 요구한다면 `--name`에 제출자 실명을 넣으세요. 배포 전에는 예시 URL을 제출 파일로 만들지 않습니다.

## 보완할 콘텐츠

개발 기간, 팀 구성, 개인 기여, 이메일, 이력서, 실제 앱 스크린샷, 데모 영상이 아직 제공되지 않았습니다. [확인 목록](docs/CONTENT-CHECKLIST.md)에 자세히 정리했습니다. 개인 기여 확인 전에는 My Role 요구사항이 최종 충족된 상태가 아닙니다.

접근성: 본문 건너뛰기, 의미 있는 제목·랜드마크, 키보드 포커스, 이미지 대체 텍스트, 새 탭 안내, 동작 줄이기 설정을 지원합니다. 모바일 메뉴는 별도 버튼 없이 모든 링크가 표시됩니다. 외부 폰트·분석 추적·쿠키·서버 API를 사용하지 않습니다.
