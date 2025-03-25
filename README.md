1. 리포지토리 클론 및 설치
- 터미널(또는 Git Bash)을 열고 리포지토리를 클론합니다.
    git clone https://github.com/leeway01/search-extension.git
    cd search-extension
- 의존성을 설치
    npm install
2. 프로덕션 빌드 생성
- 프로젝트 빌드
    npm run build

3. Chrome 확장 프로그램에 적용
- Chrome 브라우저에서 주소창에 chrome://extensions 를 입력하고 엔터를 누릅니다.
- 우측 상단의 개발자 모드(Developer mode) 토글을 활성화합니다.
- "압축해제된 확장 프로그램 로드(Load unpacked)" 버튼을 클릭합니다.
- 생성된 build 폴더를 선택합니다.
- 확장 프로그램이 로드되면, 구글 검색 페이지에 접속하여 적용 여부를 확인합니다.