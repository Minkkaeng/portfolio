import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Layers, ArrowUpRight } from "lucide-react";
import { getImagePath } from "../utils/imagePath";

type Project = {
  id: number;
  label: string;
  role: string;
  period: string;
  title: string;
  summary: string;
  tech: string[];
  highlights: string[];
  tags: string[];
  live: string;
  repo: string;
  logo: string;
  color: string;
};

const projects: Project[] = [
  {
    id: 6,
    label: "NEW · L'Essence Naturelle",
    role: "개인 프로젝트 · Frontend",
    period: "2026.04",
    title: "프리미엄 내츄럴 스킨케어",
    summary:
      "자연주의 프리미엄 스킨케어 브랜드를 위한 웹페이지를 구현했습니다. 브랜드 이미지에 맞는 세련된 UI와 반응형 디자인에 중점을 두었습니다.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    highlights: [
      "프리미엄 브랜드 이미지에 맞는 UI/UX 구현",
      "반응형 웹 디자인을 통한 데스크탑/모바일 호환성 확보",
    ],
    tags: ["React", "Landing", "Skincare"],
    live: "https://minkkaeng.github.io/L-Essence-Naturelle/",
    repo: "https://github.com/Minkkaeng/L-Essence-Naturelle",
    logo: "/img/projects/LEssenceNaturelle.png",
    color: "#4a5d23",
  },
  {
    id: 5,
    label: "NEW · WeWeb",
    role: "개인 프로젝트 · Frontend",
    period: "2026.04",
    title: "WeWeb 랜딩 웹페이지",
    summary:
      "React 기반 WeWeb 애플리케이션의 브랜드스토리 및 랜딩 페이지를 구현했습니다. 반응형 구조와 직관적인 UI 요소들에 중점을 두었습니다.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    highlights: [
      "커스텀 디자인 기반 랜딩 페이지 컴포넌트화",
      "반응형 웹 디자인을 통한 데스크탑/모바일 호환성 확보",
    ],
    tags: ["React", "Landing", "Responsive"],
    live: "https://minkkaeng.github.io/WeWeb/",
    repo: "https://github.com/Minkkaeng/WeWeb",
    logo: "/img/projects/portfolio.PNG",
    color: "#f43f5e",
  },
  {
    id: 0,
    label: "NEW · UsPetMile",
    role: "개인 프로젝트 · Fullstack",
    period: "2026.02",
    title: "반려동물 동반 여행 플랫폼",
    summary:
      "반려동물과 함께할 수 있는 여행지 정보를 제공하고 커뮤니티를 형성하는 플랫폼입니다. 사용자의 위치 기반 정보를 활용하며 세련된 UI를 지향합니다.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MySQL"],
    highlights: [
      "사용자 맞춤형 반려동물 동반 장소 큐레이션",
      "반려인들을 위한 실시간 커뮤니티 기능 구현",
      "지도 API를 활용한 위치 기반 장소 검색",
    ],
    tags: ["Fullstack", "Map API", "Community"],
    live: "https://minkkaeng.github.io/UsPetMile/",
    repo: "https://github.com/Minkkaeng/UsPetMile",
    logo: "/img/projects/UsPetMile.png",
    color: "#6c63ff",
  },
  {
    id: 1,
    label: "01 · Play Farm",
    role: "팀 프로젝트 · Frontend 중심",
    period: "2025.12 ~ 2026.01",
    title: "농장 체험 예약 플랫폼",
    summary:
      "농장 체험을 검색·필터·예약까지 연결하는 서비스. 사용자/관리자 화면 흐름을 기준으로 UI 구조를 설계하고 구현했습니다.",
    tech: ["React", "React Router", "Node.js", "Express", "MySQL"],
    highlights: [
      "사용자/관리자 페이지 분리 및 라우팅 구조 설계",
      "리스트/상세 흐름에서 상태 분기(로딩/빈값/에러) 처리",
      "관리자 CRUD 흐름(등록/수정/삭제) 화면 패턴 정리",
    ],
    tags: ["React Router", "UI Flow", "Admin CRUD"],
    live: "https://play-farm.vercel.app/",
    repo: "#",
    logo: "/img/projects/Playfarm.png",
    color: "#4ade80",
  },
  {
    id: 2,
    label: "02 · Planify",
    role: "개인 프로젝트",
    period: "2025.12",
    title: "Productivity 플래너",
    summary:
      "할 일/캘린더/설정을 한 흐름으로 묶어 사용성을 높인 플래너. 로컬스토리지 기반으로 데이터를 유지하도록 설계했습니다.",
    tech: ["React", "Vite", "LocalStorage"],
    highlights: [
      "로컬 데이터 저장/초기화 유틸 분리",
      "레이아웃 컴포넌트 분리로 페이지 구조 재사용",
      "GitHub Pages 배포 및 base 경로 이슈 해결",
    ],
    tags: ["State", "LocalStorage", "Deploy"],
    live: "https://minkkaeng.github.io/Planify/",
    repo: "https://github.com/Minkkaeng/Planify",
    logo: "/img/projects/Planify.png",
    color: "#3b82f6",
  },
  {
    id: 3,
    label: "03 · Airbnb Renewal",
    role: "개인 프로젝트",
    period: "2025.10",
    title: "숙소 검색 UX 리디자인",
    summary: "검색 흐름과 카드 UI를 재구성해 React로 구현했습니다. 필터/모달 등 인터랙션 중심 UI 구성을 연습했습니다.",
    tech: ["React", "React Router"],
    highlights: ["카테고리/필터 UI 패턴 구현", "모달/오버레이 인터랙션 처리", "반응형 카드 그리드 레이아웃 구성"],
    tags: ["Modal", "Filter UX", "Responsive"],
    live: "https://minkkaeng.github.io/AirBnB/",
    repo: "https://github.com/Minkkaeng/AirBnB",
    logo: "/img/projects/Airbnb.png",
    color: "#ffffff",
  },
  {
    id: 4,
    label: "04 · The GamSung",
    role: "개인 프로젝트",
    period: "2025.08",
    title: "감성 인테리어 쇼핑몰",
    summary: "톤앤매너를 설정하고 반복 UI 컴포넌트(카드/배너/버튼) 기준으로 페이지를 퍼블리싱을 연습했습니다.",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "토큰 기반 컬러 시스템으로 일관성 유지",
      "메인/카테고리/상세/기획전 페이지 구성",
      "카드/배너 컴포넌트 재사용 구조 설계",
    ],
    tags: ["Token CSS", "Publishing", "Components"],
    live: "https://minkkaeng.github.io/The-GamSung/",
    repo: "https://github.com/Minkkaeng/The-GamSung",
    logo: "/img/projects/TheGamSung.png",
    color: "#d4a373",
  },
];

const ProjectCard = memo(({ project, index, onClick }: { project: Project; index: number; onClick: (p: Project) => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    onClick={() => onClick(project)}
    className="projects-card-wrapper group"
    style={{ willChange: "transform, opacity" }}
  >
    {/* Card Image Part */}
    <div className="projects-card-image-wrapper group-hover:shadow-xl group-hover:-translate-y-1">
      <div className="projects-card-image-content group-hover:scale-105">
        <div 
          className="projects-card-logo-circle"
          style={{ backgroundColor: `${project.color}10` }}
        >
          <span className="projects-card-logo-text" style={{ color: project.color }}>
            {project.label.split('·')[1]?.trim().substring(0, 2) || project.title.substring(0, 2)}
          </span>
        </div>
        <span className="projects-card-logo-label">
          {project.label.split('·')[1]?.trim() || project.title}
        </span>
      </div>
      {/* Hover Overlay Button */}
      <div className="projects-card-hover-overlay group-hover:opacity-100">
         <div className="projects-card-hover-btn group-hover:translate-y-0">
            상세보기 <ArrowUpRight size={14} />
         </div>
      </div>
    </div>

    {/* Card Text Part */}
    <div className="projects-card-text-wrapper">
      <p className={project.label.startsWith("NEW") ? "projects-card-label-new" : "projects-card-label-normal"}>
        {project.label}
      </p>
      <h3 className="projects-card-title group-hover:text-accent">
        {project.title}
      </h3>
      <p className="projects-card-summary">
        {project.summary}
      </p>
    </div>
  </motion.div>
));

function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="projects-container">
      <div className="projects-header-wrapper">
        <span className="projects-badge">Projects</span>
        <h2 className="projects-title">Selected Work</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            onClick={setActiveProject} 
          />
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <div className="projects-modal-wrapper">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="projects-modal-bg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              className="projects-modal-card"
              style={{ willChange: "transform, opacity" }}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="projects-modal-close-btn"
              >
                <X size={20} />
              </button>

              <div className="projects-modal-scroll-area">
                <div className="projects-modal-tags-wrapper">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="projects-modal-tag"
                    >
                      # {tag}
                    </span>
                  ))}
                </div>

                <span className="projects-modal-label">
                  {activeProject.label}
                </span>
                <h3 className="projects-modal-title">{activeProject.title}</h3>
                <div className="projects-modal-meta">
                  <span className="projects-modal-meta-item">
                    <Layers size={14} /> {activeProject.role}
                  </span>
                  <span className="projects-modal-meta-divider" />
                  <span>{activeProject.period}</span>
                </div>

                <div className="projects-modal-body">
                  <div>
                    <h4 className="projects-modal-section-heading">
                      Overview
                    </h4>
                    <p className="projects-modal-overview">{activeProject.summary}</p>
                  </div>

                  <div>
                    <h4 className="projects-modal-section-heading">
                      Tech Stack
                    </h4>
                    <div className="projects-modal-tech-wrapper">
                      {activeProject.tech.map((t) => (
                        <span
                          key={t}
                          className="projects-modal-tech-badge"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="projects-modal-section-heading">
                      Key Highlights
                    </h4>
                    <ul className="projects-modal-highlights-list">
                      {activeProject.highlights.map((h) => (
                        <li key={h} className="projects-modal-highlight-item">
                          <span className="projects-modal-highlight-dot" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="projects-modal-links">
                    {activeProject.live !== "#" && (
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-link-btn-primary"
                      >
                        Live Project <ExternalLink size={16} />
                      </a>
                    )}
                    {activeProject.repo !== "#" && (
                      <a
                        href={activeProject.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-link-btn-secondary"
                      >
                        GitHub Repo <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
