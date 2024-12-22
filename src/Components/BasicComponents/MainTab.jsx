import React, { useState } from 'react';
import { useRouter } from 'next/router';

const MainTab = ({ posts, projects }) => {
  // 상태 관리: 기본 탭은 블로그로 설정
  const [activeTab, setActiveTab] = useState('blog'); // 'blog' 또는 'study'로 상태 관리
  // 탭 클릭 시 상태 변경 함수
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const router = useRouter();

  const handleProjectClick = (projectId) => {
    router.push(`/projects/${projectId}`); // 클릭 시 해당 프로젝트 페이지로 이동
  };

  return (
    <div>
      {/* 탭 메뉴 */}
      <div style={{ display: 'flex', gap: '0px' ,marginBottom:'12px'}}>
        <div
          style={{
            fontSize:'16px',
            padding: '10px',
            cursor: 'pointer',
            fontWeight: activeTab === 'blog' ? '600' : '400',
            color: activeTab === 'blog' ? 'black' : '#BFBFBF',
            borderBottom: activeTab === 'blog' ? '2px solid black' : 'none',
          }}
          onClick={() => handleTabClick('blog')}
        >
          블로그
        </div>
        <div
          style={{
            fontSize:'16px',
            padding: '10px',
            cursor: 'pointer',
            fontWeight: activeTab === 'study' ? '600' : '400',
            color: activeTab === 'study' ? 'black' : '#BFBFBF',
            borderBottom: activeTab === 'study' ? '2px solid black' : 'none',
          }}
          onClick={() => handleTabClick('study')}
        >
          공부
        </div>
      </div>

      {/* 탭 내용 */}
      {activeTab === 'blog' && (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'study' && (
        <div>
          {projects.map((project) => (
            <div className='project-item'key={project.id}
            style={{
              cursor: 'pointer',
              padding: '10px',
              border: '1px solid #ccc',
              marginBottom: '10px',
            }}
            onClick={() => handleProjectClick(project.id)} // 클릭 시 프로젝트 상세 페이지로 이동
          >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainTab;

