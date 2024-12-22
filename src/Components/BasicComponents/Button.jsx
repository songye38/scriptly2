import { useState } from 'react';

const Button = ({ onClick, title }) => {
  // 호버 상태를 관리하는 state
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: 'auto',
        height : '48px',
        padding: '6px 12px', // padding을 적당히 줄여서 높이를 낮춤
        background: '#EAEEFD',
        borderRadius: '4px',
        justifyContent: 'center', // 버튼 안의 내용물을 가로로 정렬
        alignItems: 'center', // 버튼 안의 내용물이 세로로 정렬
        gap: '0px',
        display: 'inline-flex', // 버튼을 inline-flex로 설정하여 가로 배치
        border: isHovered ? '1px #5670F1 solid' : 'none', // 호버 시 border 추가
        cursor: 'pointer', // 버튼 클릭할 수 있도록 커서 변경
        whiteSpace: 'nowrap', // 텍스트가 자동으로 줄 바꿈되지 않도록 설정
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
          lineHeight: '0px', // lineHeight를 적당히 줄여서 높이를 낮춤
          wordWrap: 'break-word',
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default Button;
