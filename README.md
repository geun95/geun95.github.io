# Jung Jieun · Developer Portfolio

미니멀 화이트 디자인의 정적 개발자 포트폴리오입니다. 현재 프로젝트는 **Momentory 한 개**이며, 개인 프로필 README와 별도로 운영합니다.

- 배포 대상 저장소: <https://github.com/geun95/geun95.github.io>
- 사이트 주소: <https://geun95.github.io/> (2026-11-22 배포 및 접속 확인 완료)
- HTML / CSS / JavaScript만 사용합니다. 패키지 설치나 빌드가 필요 없습니다.
- 메인 소개와 프로젝트 상세 페이지를 분리했습니다.
- 공통 헤더·푸터·카드·기술 목록·연락처는 같은 데이터를 사용합니다.

검증 결과는 [검증 기록](docs/VERIFICATION.md), 제출용 URL 파일은 [정지은-공작과제-06.txt](submission/정지은-공작과제-06.txt)를 참고하세요.

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
  email: 'g95eun@gmail.com',
  resume: null,
}
```

이메일은 실제 주소로, 이력서는 실제 PDF 파일을 `assets/resume.pdf`에 넣은 뒤 `resume: 'assets/resume.pdf'`로 설정합니다. `null`은 클릭할 수 있는 가짜 링크 대신 준비 중 표시를 만듭니다. 파일이 없으면 다운로드 링크를 설정하지 마세요.

## 새 프로젝트 추가

1. `js/projects.js`의 `projects` 배열에 Momentory 객체를 복사하고 새 프로젝트 정보를 입력합니다.
2. `id`는 중복되지 않는 영문 소문자와 하이픈으로, `page`는 `projects/새프로젝트.html`로 설정합니다.
3. `problem`(문제 정의), `role`(본인의 실제 역할), `cover`, `coverAlt`, `coverIsPlaceholder`, 기술 태그와 실제 링크를 입력합니다. 경로 맨 앞에 `/`를 붙이지 않습니다.
4. `projects/momentory.html`을 복사해 새 상세 HTML을 만듭니다.
5. 새 HTML의 `data-project`를 새 `id`로 바꾸고 소개·문제·해결·역할·결과, `<title>`, description, OG와 canonical URL을 수정합니다. 화면을 여러 장 쓰는 커버는 `coverScreens`, 캡션은 `coverCaption`으로 설정할 수 있습니다.
6. 이미지와 링크를 검사합니다. **메인 페이지 카드와 공통 UI는 별도 수정 없이 자동 추가됩니다.**

개별 프로젝트의 서사는 HTML에, 재사용하는 구조화 정보는 데이터 파일에 둡니다. 프레임워크나 빌드 도구 없이 관리할 수 있습니다.

## 실제 스크린샷으로 교체

1. 개인정보가 제거된 실제 앱 화면을 `assets/images/momentory/`에 추가합니다. WebP나 최적화된 PNG/JPEG를 권장합니다.
2. `screenshots` 각 항목의 `image: null`을 `'assets/images/momentory/retrospect.webp'` 같은 경로로 바꿉니다.
3. 해당 화면을 구체적으로 설명하는 `alt`를 작성합니다.
4. 현재 대표 이미지는 `coverScreens`의 실제 화면 세 장으로 구성합니다. 각 `src`와 `alt`를 바꾸면 됩니다. 단일 이미지를 쓰려면 `coverScreens`를 제거하고 `cover`, `coverAlt`를 설정하며, `coverIsPlaceholder: false`로 둡니다.
5. 상세 상단 커버는 고정 HTML이므로 `projects/momentory.html`의 `detail-screen-board` 이미지 경로·alt·캡션도 바꿉니다.

현재 대표 이미지와 기능 화면은 사용자가 제공한 최종보고서의 실제 앱 화면을 사용합니다. 보고서가 시연용 데이터임을 명시한 화면만 추출했습니다. 구체적인 출처와 수치 해석은 [콘텐츠 근거](docs/MOMENTORY-SOURCES.md)를 참고하세요. 이미지가 없거나 로드되지 않으면 안내를 표시합니다. 스크린샷은 데이터 항목의 `width`·`height`에 실제 크기를 기록합니다. 이미지 출처는 `docs/MOMENTORY-SOURCES.md`에서 관리하며 사이트에는 출처 캡션을 표시하지 않습니다.

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
python3 scripts/create-submission.py --name '정지은' --url https://geun95.github.io/
```

HTTP 응답과 포트폴리오 내용이 확인된 경우에만 `submission/정지은-공작과제-06.txt`를 생성합니다. 파일 내용은 사이트 URL 한 줄입니다. 과제에서 한글 실명을 요구한다면 `--name`에 제출자 실명을 넣으세요. 배포 전에는 예시 URL을 제출 파일로 만들지 않습니다.

## 보완할 콘텐츠

개인 기여·AI·Backend 역할·개인 사용 기술·공개 이메일·개발 기간·팀 인원은 사용자 확인을 거쳐 반영했습니다. 소개·기능·팀의 문제 해결·결과와 실제 앱 화면은 최종보고서를 근거로 갱신했습니다. 이력서 PDF는 아직 제공되지 않았습니다. 선택 항목인 데모 영상은 사용자 요청으로 사이트에서 제외했습니다. [확인 목록](docs/CONTENT-CHECKLIST.md)에 자세히 정리했습니다. 과제 필수 항목과 사이트 위치는 [과제 확인표](docs/ASSIGNMENT-CHECKLIST.md)에 정리했습니다.

접근성: 본문 건너뛰기, 의미 있는 제목·랜드마크, 키보드 포커스, 이미지 대체 텍스트, 새 탭 안내, 동작 줄이기 설정을 지원합니다. 모바일 메뉴는 별도 버튼 없이 모든 링크가 표시됩니다. 글꼴은 Pretendard Variable 1.3.9를 jsDelivr의 공식 배포 경로에서 필요한 문자 단위로 불러옵니다. 메인·상세 페이지에 동일하게 적용하며, 불러오지 못하면 시스템 글꼴로 표시합니다. 분석 추적·쿠키·서버 API를 사용하지 않습니다.

글꼴 설정: `css/style.css`의 `--font` 및 두 HTML의 글꼴 스타일시트 링크. [Pretendard 공식 안내](https://github.com/orioncactus/pretendard)를 참고하세요.

개인 Skills와 프로젝트 전체 Tech Stack은 별도로 관리합니다. 현재 Skills는 사용자가 제공한 참고 이미지의 15개 기술을 담습니다. Momentory의 실제 기술 구성은 상세 페이지에서 별도로 관리합니다. CSS·JavaScript를 변경할 때는 두 HTML의 `?v=` 값을 함께 갱신하면 이전 방문자의 캐시를 갱신할 수 있습니다.
