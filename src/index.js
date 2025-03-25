// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './components/Sidebar';

// 전역 함수로 renderSidebar를 정의합니다.
window.renderSidebar = function (mountNode) {
  if (!mountNode) {
    console.error("renderSidebar: container not found.");
    return;
  }
  const root = ReactDOM.createRoot(mountNode);
  root.render(
    <React.StrictMode>
      <Sidebar />
    </React.StrictMode>
  );
};

// 기본 렌더링이 필요한 경우 (옵션)
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Sidebar />
    </React.StrictMode>
  );
}