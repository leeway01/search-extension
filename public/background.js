// background.js
console.log("Background service worker loaded.");

// 확장 프로그램이 설치되었을 때 실행
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed.");
});

// 확장 프로그램이 시작될 때 실행
chrome.runtime.onStartup.addListener(() => {
  console.log("Extension started up.");
});

// 다른 스크립트(예: content script나 옵션 페이지)로부터 메시지 수신 예제
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Received message:", message, "from", sender);
  // 필요한 작업 수행 후 응답 전송
  sendResponse({ status: "success", data: "Message received by background script" });
});
