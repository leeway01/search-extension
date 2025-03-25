1. 리포지토리 클론 및 설치
- 터미널(또는 Git Bash) 리포지토리 클론
> git clone https://github.com/leeway01/search-extension.git

> cd search-extension

- 의존성 설치
> npm install

2. 프로덕션 빌드 생성
- 프로젝트 빌드
> npm run build
- 빌드 후 content/content.js 파일 수정
> build/static 하위에 css, js 폴더에 있는 main.\*.js와 main.\*.css는 빌드 시 마다 다르게 생성됨으로 빌드 후 content/content.js에서 값을 변경해야 함.

> main.a383009d.css , main.828ceaa0.js

3. Chrome 확장 프로그램에 적용
- Chrome 브라우저에서 주소창에 chrome://extensions 를 입력하고 엔터를 누릅니다.
- 우측 상단의 개발자 모드(Developer mode) 토글을 활성화합니다.
- "압축해제된 확장 프로그램 로드(Load unpacked)" 버튼을 클릭합니다.
- 생성된 build 폴더를 선택합니다.
- 확장 프로그램이 로드되면, 구글 검색 페이지에 접속하여 적용 여부를 확인합니다.
