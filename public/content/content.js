// public/content/content.js
(function () {
  console.log("Content script loaded.");

  // 1. 사이드바 컨테이너 생성
  const sidebar = document.createElement('div');
  sidebar.id = 'custom-sidebar';
  sidebar.style.position = 'fixed';
  sidebar.style.top = '0';
  sidebar.style.right = '0';
  sidebar.style.width = '300px';
  sidebar.style.height = '100%';
  sidebar.style.backgroundColor = 'white';
  sidebar.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
  sidebar.style.zIndex = '10000';
  sidebar.style.overflowY = 'auto';
  document.body.appendChild(sidebar);

  // 2. React 번들 스크립트 로드
  // 확장 프로그램의 루트로 빌드 폴더를 선택했으므로 "build/"를 제외한 경로 사용
  const reactBundlePath = 'static/js/main.828ceaa0.js'; // 실제 빌드 결과물의 파일명 사용
  const reactScriptURL = chrome.runtime.getURL(reactBundlePath);
  console.log("Attempting to load React bundle from:", reactScriptURL);

  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = chrome.runtime.getURL('static/css/main.a383009d.css');
  document.head.appendChild(cssLink);

  const script = document.createElement('script');
  script.src = reactScriptURL;
  script.onload = function () {
    console.log("React bundle loaded successfully.");
    
    // 3. 외부 파일(renderSidebarCall.js)을 인젝션하여 페이지 컨텍스트에서 renderSidebar를 호출합니다.
    const renderCallScript = document.createElement('script');
    renderCallScript.src = chrome.runtime.getURL('renderSidebarCall.js');
    renderCallScript.onload = function () {
      console.log("RenderSidebar call script executed.");
      // 옵션: 스크립트 실행 후 제거
      renderCallScript.parentNode.removeChild(renderCallScript);
    };
    renderCallScript.onerror = function (error) {
      console.error("Failed to load renderSidebar call script:", error);
      sidebar.innerHTML = "<p style='color:red'>Failed to load sidebar render call.</p>";
    };
    document.head.appendChild(renderCallScript);
  };
  script.onerror = function (error) {
    console.error("Failed to load React bundle:", error);
    sidebar.innerHTML = "<p style='color:red'>Failed to load sidebar content.</p>";
  };
  document.head.appendChild(script);
})();
