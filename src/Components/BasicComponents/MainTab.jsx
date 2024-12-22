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
      {/* {activeTab === 'blog' && (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )} */}
      {activeTab === 'blog' && (
  <div style={{
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1fr)', // 한 줄에 3개의 카드 배치
    gap: '20px',
    marginTop: '20px',
  }}>
    {posts.map((post) => (
      <div
        key={post.id}
        style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        }}
      >
        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#333',
          marginBottom: '12px',
          lineHeight: '1.4',
          textTransform: 'capitalize', // 제목을 첫 글자만 대문자로
        }}>
          {post.title}
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#666',
          lineHeight: '1.6',
          wordWrap: 'break-word',
          maxHeight: '120px',
          overflow: 'hidden', // 내용이 너무 길 경우 잘라냄
        }}>
          {post.content}
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '12px',
        }}>
          <button
            onClick={() => handlePostClick(post.id)} // 클릭 시 블로그 포스트 상세 페이지로 이동
            style={{
              padding: '6px 12px',
              backgroundColor: '#5670F1',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#435BB2'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5670F1'}
          >
            Read More
          </button>
        </div>
      </div>
    ))}
  </div>
)}


      {activeTab === 'study' && (
  <div style={{
    display: 'grid', 
    gridTemplateColumns: 'repeat(4, 1fr)', // 한 줄에 4개의 카드를 배치
    gap: '20px', // 카드 간의 간격
    marginTop: '20px', // 상단 여백
  }}>
    {projects.map((project) => (
      <div
        key={project.id}
        style={{
          cursor: 'pointer',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          border: '1px solid #e0e0e0',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onClick={() => handleProjectClick(project.id)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        }}
      >
        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#333',
          marginBottom: '12px'
        }}>
          {project.name}
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#666',
          lineHeight: '1.5'
        }}>
          {project.description}
        </p>
      </div>
    ))}
  </div>
)}


    </div>
  );
};

export default MainTab;

