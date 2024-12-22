// /pages/test.js
import React from 'react';
import { useState } from 'react';
import UserProfile from '../src/Components/BasicComponents/UserProfile.jsx';
import MainTab from '../src/Components/BasicComponents/MainTab.jsx';
import ProjectTab from '../src/Components/BasicComponents/ProjectTab.jsx';
import Button from '../src/Components/BasicComponents/Button.jsx';
import Toggle from '../src/Components/BasicComponents/Toggle.jsx';
import CheckBox from '../src/Components/BasicComponents/CheckBox.jsx';
import ExpandButton from '../src/Components/BasicComponents/ExpandButton.jsx';
import ProjectName from '../src/Components/BasicComponents/ProjectName.jsx';
import UserMsg from '../src/Components/BasicComponents/\bUserMsg.jsx';
import Logo from '../src/Components/BasicComponents/Logo.jsx';
import ResultBasic from '../src/Components/ComplexComponents/ResultBasic.jsx';
import Header from '../src/Components/ComplexComponents/Header.jsx';
import ResultSummary from '../src/Components/ComplexComponents/ResultSummary.jsx';
import Note from '../src/Components/ComplexComponents/Note.jsx';
import MyInput from '../src/Components/BasicComponents/MyInput.jsx';
import InputModal from '../src/Components/BasicComponents/InputModal.jsx';
import MarkdownEditor from '../src/Components/ComplexComponents/MarkdownEditor.jsx';


const TestPage = () => {
    const noteTitle = '나의 첫 번째 노트';
    const noteContents = [
      '첫 번째 내용: 리액트를 배우는 중입니다.',
      '두 번째 내용: 컴포넌트와 상태를 이해하고 있습니다.',
      '세 번째 내용: 더 많은 예제를 통해 실력을 쌓아가고 있습니다.',
    ];

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
      <div style={{ width: '100%', height: '100%', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          {/* <Header />
          <InputModal />
          <MyInput
                value={inputValue}
                onChange={handleInputChange}
                placeholder="나만의 Input"
            />
          <UserProfile />
          <ProjectTab />
          <Button title="기본버튼"/>
          <Toggle />
          <CheckBox />
          <ExpandButton />
          <ProjectName />
          <UserMsg text = "꽤 긴 내용이 들어갈수도 있습니다. 괜찮게 잘 들어갈까요? ipsum을 넣어야 할까요? 내용이 제대로 잘 표시될지 모르겠네 확실히 피그마에서 보는거랑은 차이가 있네.."/>
          <Logo />
          <ResultBasic title = "dkdk" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumt" />
          <ResultSummary title = "dkdk" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumt" />
          <Note title={noteTitle} contentArray={noteContents} /> */}
          <MarkdownEditor />
      </div>
  
    );
};

export default TestPage;
