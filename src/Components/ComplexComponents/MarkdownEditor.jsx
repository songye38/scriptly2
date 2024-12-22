import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const MarkdownEditor = ({ initialContent, onSave }) => {
  const [value, setValue] = useState(initialContent);

  const handleEditorChange = (newValue) => {
    setValue(newValue);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(value); // 저장된 마크다운 내용 처리
    }
  };

  return (
    <div style={{ width : '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* MDEditor의 높이를 100%로 설정하고, flex-grow로 부모 요소에 맞게 확장 */}
      <MDEditor
        value={value}
        onChange={handleEditorChange}
        style={{
          flexGrow: 1,   // 가용 공간을 모두 차지하도록 설정
          marginBottom: '20px',  // 아래 여백을 추가
          height: '100%', // 부모 div에 맞춰서 100% 높이로 설정
        }}
      />
      
      {/* 버튼은 화면 하단에 고정하거나, 필요에 따라 스타일을 설정 */}
      <button
        onClick={handleSave}
        style={{
          padding: '10px 20px',
          margin: '10px',
          alignSelf: 'center',
          backgroundColor: '#4CAF50',  // 버튼 배경색
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        저장
      </button>
    </div>
  );
};

export default MarkdownEditor;
