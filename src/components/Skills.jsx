// src/components/Skills.jsx
import { useState } from 'react';
import { getImagePath } from '../utils/imagePath';

const skillsMain = [
   {
      name: 'HTML5',
      icon: '/img/html.png',
      desc: '시맨틱 태그, 접근성, 구조 설계',
      detail:
         '섹션, 네비게이션, 아티클 등 시맨틱 태그를 사용해서 구조를 명확히 나누고, 스크린 리더를 고려한 마크업을 작성합니다. 리스트/테이블/폼 구조를 상황에 맞게 선택해서 유지보수가 쉬운 HTML을 선호합니다.',
   },
   {
      name: 'CSS3 / Layout',
      icon: '/img/css3.png',
      desc: 'Flex, Grid, 반응형, 컴포넌트화',
      detail:
         'Flex와 Grid를 상황에 맞게 섞어서 레이아웃을 구성하고, 토큰 기반으로 색상/간격/타이포를 관리합니다. 컴포넌트 단위로 스타일을 나누고, 반응형 브레이크포인트를 미리 정의해서 레이아웃이 자연스럽게 줄어들도록 만듭니다.',
   },
   {
      name: 'JavaScript',
      icon: '/img/js.png',
      desc: '상태, DOM, 인터랙션 구성',
      detail:
         '이벤트 기반으로 상태를 관리하고, 사용자 액션에 따라 DOM을 업데이트하는 흐름을 설계합니다. 모달, 탭, 아코디언, 필터 등 UI 패턴을 직접 구현해본 경험이 있고, 비동기 요청/응답에 따른 상태 분기 처리에 익숙합니다.',
   },
   {
      name: 'React',
      icon: '/img/react.png',
      desc: '컴포넌트 설계, 라우팅 구조 이해',
      detail:
         '페이지를 컴포넌트 단위로 나누고, props와 state 흐름을 정리해서 구조를 설계합니다. React Router로 페이지 라우팅을 구성하고, 공통 레이아웃/헤더/푸터를 분리해서 재사용 가능한 구조로 만드는 데 관심이 많습니다.',
   },
   {
      name: 'Git / GitHub',
      icon: '/img/github.png',
      desc: '브랜치, 협업, 배포 경험',
      detail:
         '브랜치를 나눠서 기능 단위로 커밋하고, PR 기반으로 코드를 합치는 흐름을 경험했습니다. GitHub Pages로 프론트엔드 프로젝트를 배포해봤고, 충돌 해결과 기본적인 Git 에러 처리에 익숙합니다.',
   },
];

const skillsSupport = [
   {
      name: 'Photoshop',
      icon: '/img/ps.png',
      desc: '이미지 보정, 배너 제작',
      detail: '간단한 사진 보정, 합성, 썸네일/배너 이미지 제작이 가능합니다. 웹에서 사용하기 좋은 해상도와 용량을 고려해서 이미지를 정리합니다.',
   },
   {
      name: 'Illustrator',
      icon: '/img/ai.png',
      desc: '로고, 아이콘, 심볼 작업',
      detail: '벡터 기반 로고와 간단한 아이콘을 직접 제작할 수 있습니다. UI에 어울리는 심볼 형태를 잡고, SVG로 내보내어 웹에서 재사용하는 흐름을 이해하고 있습니다.',
   },
];

function Skills() {
   const [activeSkill, setActiveSkill] = useState(null);

   const openSkillModal = (skill) => {
      setActiveSkill(skill);
   };

   const closeSkillModal = () => {
      setActiveSkill(null);
   };

   return (
      <div className="section-inner skills-inner">
         <div className="section-header">
            <p className="eyebrow">Skills</p>
            <h2>What I build with</h2>
         </div>

         {/* 메인 스킬 */}
         <div className="skills-grid-main">
            {skillsMain.map((skill) => (
               <button key={skill.name} type="button" className="skill-card main skill-card-button" onClick={() => openSkillModal(skill)}>
                  <div className="skill-top">
                     <img src={getImagePath(skill.icon)} alt={skill.name} className="skill-icon" />
                     <h3>{skill.name}</h3>
                  </div>
                  <p>{skill.desc}</p>
               </button>
            ))}
         </div>

         <div className="skills-subtitle">Design & system thinking</div>

         {/* 서포트 스킬 */}
         <div className="skills-grid-sub">
            {skillsSupport.map((skill) => (
               <button key={skill.name} type="button" className="skill-card sub skill-card-button" onClick={() => openSkillModal(skill)}>
                  <div className="skill-top">
                     <img src={getImagePath(skill.icon)} alt={skill.name} className="skill-icon" />
                     <h3>{skill.name}</h3>
                  </div>
                  <p>{skill.desc}</p>
               </button>
            ))}
         </div>

         {/* 모달 */}
         {activeSkill && (
            <div className="skill-modal-backdrop" onClick={closeSkillModal}>
               <div
                  className="skill-modal"
                  onClick={(e) => {
                     e.stopPropagation(); // 안쪽 클릭 시 오버레이 클릭으로 닫히지 않게
                  }}>
                  <button type="button" className="skill-modal-close" onClick={closeSkillModal}>
                     ×
                  </button>

                  <div className="skill-modal-header">
                     <img src={getImagePath(activeSkill.icon)} alt={activeSkill.name} className="skill-modal-icon" />
                     <div>
                        <p className="skill-modal-label">Skill Detail</p>
                        <h3>{activeSkill.name}</h3>
                     </div>
                  </div>

                  <p className="skill-modal-desc">{activeSkill.detail || activeSkill.desc}</p>
               </div>
            </div>
         )}
      </div>
   );
}

export default Skills;
