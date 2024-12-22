import { useState } from 'react';

const Button = ({onClick,title}) => {
  // 호버 상태를 관리하는 state
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: 'auto',
        height: '100%',
        padding: '10px',
        background: '#EAEEFD',
        borderRadius: '4px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        display: 'inline-flex',
        border: isHovered ? '1px #5670F1 solid' : 'none', // 호버 시 border 추가
        cursor: 'pointer', // 버튼 클릭할 수 있도록 커서 변경
      }}
      onMouseEnter={() => setIsHovered(true)}  // 마우스가 들어가면 호버 상태 활성화
      onMouseLeave={() => setIsHovered(false)}  // 마우스가 나가면 호버 상태 비활성화
      onClick={onClick}
    >
      <div
        style={{
          color: '#5670F1',
          fontSize: '14px',
          fontFamily: 'Pretendard',
          fontWeight: '500',
          lineHeight: '23px',
          wordWrap: 'break-word',
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default Button;
