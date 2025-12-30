// src/components/Projects.jsx
import { useState } from 'react';
import { getImagePath } from '../utils/imagePath';

const projects = [
   {
      id: 1,
      label: '01 · The GamSung',
      role: '개인 프로젝트 · HTML / CSS / JS',
      title: '감성 인테리어 쇼핑몰 웹사이트',
      summary: '따뜻한 톤앤매너의 인테리어 상품 쇼핑몰. 메인 · 카테고리 · 상세 · 기획전 페이지를 퍼블리싱했습니다.',
      tags: ['Responsive layout', '토큰 기반 컬러 시스템', '배너 · 카드 컴포넌트'],
      link: 'https://minkkaeng.github.io/The-GamSung/',
      logo: '/img/projects/TheGamSung.png',
      thumbnail: '/img/projects/gamsung-main.png',
   },
   {
      id: 2,
      label: '02 · Play Farm',
      role: '팀 프로젝트 · Fullstack (React / Node)',
      title: '농장 체험 예약 플랫폼',
      summary: '지역 농장 체험을 검색 · 필터 · 예약까지 할 수 있는 서비스. 목록 · 상세 · 이벤트 · 로그인 UI 설계 및 구현을 담당했습니다.',
      tags: ['React Router', '리스트/상세 구조', '이벤트·공지 모듈'],
      link: '#',
      logo: '/img/projects/Playfarm.png',
      thumbnail: '/img/projects/Playfarm-main.png',
   },
   {
      id: 3,
      label: '03 · Airbnb Renewal',
      role: '개인 프로젝트 · React',
      title: '숙소 검색 UX 리디자인',
      summary: 'Airbnb 메인 화면을 기준으로 검색 흐름과 카드 UI를 정리해 React로 재구현했습니다.',
      tags: ['Modal · 필터 UX', '카테고리 스크롤', '반응형 카드 그리드'],
      link: 'https://minkkaeng.github.io/portfolio_AirBnB/',
      logo: '/img/projects/Airbnb.png',
      thumbnail: '/img/projects/airbnb-main.png',
   },
   {
      id: 4,
      label: '04 · Planify',
      role: '개인 프로젝트 · React',
      title: '하루를 정리하는 Productivity 플래너',
      summary: '할 일, 캘린더, 설정을 한 흐름 안에서 관리할 수 있는 React 기반 플래너. 로컬스토리지로 사용자 데이터를 유지하도록 설계했습니다.',
      tags: ['React 상태 관리', 'LocalStorage', '캘린더 화면'],
      link: '#',
      logo: '/img/projects/Planify.png',
      thumbnail: '/img/projects/planify-main.png',
   },
];

function Projects() {
   const [activeProject, setActiveProject] = useState(null);

   const openProjectModal = (project) => {
      setActiveProject(project);
   };

   const closeProjectModal = () => {
      setActiveProject(null);
   };

   return (
      <div className="section-inner projects-inner">
         <div className="section-header">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
         </div>

         {/* 2열: 로고/심볼 카드 */}
         <div className="projects-grid">
            {projects.map((p) => (
               <button key={p.id} type="button" className="project-card" onClick={() => openProjectModal(p)}>
                  <div className="project-logo-card">
                     <div className="project-logo-big-wrap">
                        <img src={getImagePath(p.logo)} alt={p.title} className="project-logo-big" />
                     </div>
                     <div className="project-logo-meta">
                        <span className="project-label">{p.label}</span>
                        <span className="project-logo-title">{p.title}</span>
                     </div>
                  </div>
               </button>
            ))}
         </div>

         {/* 모달: 텍스트 + 메인화면 작은 썸네일 */}
         {activeProject && (
            <div className="project-modal-backdrop" onClick={closeProjectModal}>
               <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                  <button type="button" className="project-modal-close" onClick={closeProjectModal}>
                     ×
                  </button>

                  <div className="project-modal-body">
                     <p className="project-modal-label">Project</p>
                     <h3 className="project-modal-title">{activeProject.title}</h3>
                     <p className="project-modal-role">
                        {activeProject.label} · {activeProject.role}
                     </p>

                     <p className="project-modal-summary">{activeProject.summary}</p>

                     <ul className="project-modal-tags">
                        {activeProject.tags.map((t) => (
                           <li key={t}>{t}</li>
                        ))}
                     </ul>

                     {/* 메인 화면 작은 썸네일 */}
                     <div className="project-modal-thumb-small-wrap">
                        <img src={getImagePath(activeProject.thumbnail)} alt={`${activeProject.title} 메인 화면`} className="project-modal-thumb-small" />
                     </div>

                     <div className="project-modal-actions">
                        {activeProject.link !== '#' && (
                           <a href={activeProject.link} target="_blank" rel="noreferrer" className="btn-project-live" onClick={(e) => e.stopPropagation()}>
                              Live 사이트 보기 ↗
                           </a>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default Projects;
