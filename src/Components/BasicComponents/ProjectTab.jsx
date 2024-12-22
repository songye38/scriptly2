import React from 'react';

const ProjectTab = () => {
  return (
    <div style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
      {/* 학습 탭 */}
      <div style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, borderBottom: '1px black solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
        <div style={{ color: 'black', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: '23px', wordWrap: 'break-word' }}>
          학습
        </div>
      </div>

      {/* 복습 탭 */}
      {/* <div style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <div style={{ color: '#999999', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: '23px', wordWrap: 'break-word' }}>
          복습
        </div>
      </div> */}
      {/* TODO : 정리탭에 에디터 추가하기*/}
      {/* 정리 탭 */}
      <div style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <div style={{ color: '#999999', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: '23px', wordWrap: 'break-word' }}>
          정리
        </div>
      </div>
    </div>
  );
};

export default ProjectTab;