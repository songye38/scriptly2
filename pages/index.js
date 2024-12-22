import { supabase } from '../src/utils/supabase'; // supabase 클라이언트 불러오기
import Header from '../src/Components/ComplexComponents/Header';
import MainTab from '../src/Components/BasicComponents/MainTab';
import InputModal from '../src/Components/BasicComponents/InputModal';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Home = ({ posts, projects }) => {
  const [projectName, setProjectName] = useState(''); //InputModal에서 받은 프로젝트 이름
  const router = useRouter();
  //supabase에 프로젝트 이름을 저장하는 함수

  const createProject = async (name) => {
    try {
      // 프로젝트 삽입
      const { data, error } = await supabase
        .from('projects')
        .insert([{ name, description: '새 프로젝트' }])
        .select();
  
      if (error) {
        console.error('Error code:', error.code);    // 오류 코드 출력
        console.error('Error details:', error.details); // 오류 세부 사항 출력
        throw new Error(error.message);  // 에러 발생 시 메시지 출력
      }
  
      console.log('프로젝트 생성 성공:', data);
  
      const project = data[0]; 
  
      // 동적으로 해당 프로젝트의 페이지로 이동
      router.push(`/projects/${project.id}`);
    } catch (error) {
      console.error('프로젝트 생성 실패:', error.message);
    }
  };
  
  
  
  
  // InputModal에서 프로젝트명을 받은 후 호출
  const handleCreateProject = (name) => {
    setProjectName(name); // 프로젝트명 상태 업데이트
    createProject(name);   // 데이터베이스에 프로젝트 저장
  };

  //화면 그리는 부분
  return (
    <div>
      <Header />
      <div>
        <InputModal setProjectName={handleCreateProject} />
        <MainTab posts={posts} projects={projects} />
      </div>
    </div>
  );
};


//ssr로 데이터를 미리 로드하는 부분
export const getServerSideProps = async () => {
  // posts 테이블에서 데이터 가져오기
  const { data: posts, error: postsError } = await supabase
    .from('posts')  // 'posts' 테이블에서 데이터를 가져옵니다.
    .select('*');    // 모든 컬럼 가져오기

  // projects 테이블에서 데이터 가져오기
  const { data: projects, error: projectsError } = await supabase
    .from('projects')  // 'projects' 테이블에서 데이터를 가져옵니다.
    .select('*');      // 모든 컬럼 가져오기

  // 에러 처리
  if (postsError || projectsError) {
    console.error("Error fetching data:", postsError || projectsError);
    return { props: { posts: [], projects: [] } }; // 오류 발생 시 빈 배열 반환
  }

  console.log("Fetched posts:", posts);
  console.log("Fetched projects:", projects);
  return {
    props: {
      posts,
      projects
    },
  };
};


export default Home;
