import React from 'react';
import './Sidebar.css';

const dummyResults = [
  { id: 1, title: '결과 1', reason: '콘텐츠 품질 우수' },
  { id: 2, title: '결과 2', reason: '관련성 높음' },
  { id: 3, title: '결과 3', reason: '사용자 선호도 반영' }
];

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h2 className="sidebar-title">추천 검색 결과</h2>
      <ul className="sidebar-list">
        {dummyResults.map(item => (
          <li key={item.id} className="sidebar-item">
            <h3 className="sidebar-item-title">{item.title}</h3>
            <p className="sidebar-item-reason">{item.reason}</p>
            <div className="sidebar-buttons">
              <button className="sidebar-button like-button">유용해요</button>
              <button className="sidebar-button dislike-button">불편해요</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
