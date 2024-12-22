import React from 'react';
import CheckBox from './CheckBox';

const NoteTitle = ({ title, isChecked }) => {
  return (
    <div style={{ width: 'auto', height: '100%', gap : '2px', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
      {/* 체크박스 영역 */}
      {isChecked && (
        <CheckBox />
      )}

      {/* 제목 영역 */}
     
        <div style={{ flex: '1 1 0', color: 'black', fontSize: '15px', fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>
          {title}
      </div>
    </div>
  );
};

export default NoteTitle;
