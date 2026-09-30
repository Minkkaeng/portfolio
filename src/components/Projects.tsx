import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Layers, ArrowUpRight } from "lucide-react";

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
    label: "01 · DevSnip",
    role: "개인 프로젝트 · Frontend",
    period: "2026.09",
    title: "개발 스니펫 검색 도구",
    summary:
      "React, TypeScript, JavaScript 예제를 스택별로 탐색하고 검색·언어 전환·코드 복사를 제공하는 웹 도구입니다.",
    tech: ["React", "TypeScript", "Zustand", "Fuse.js"],
    highlights: [
      "스택·카테고리·키워드 기반 스니펫 검색과 필터 구현",
      "JavaScript/TypeScript 코드 전환 및 클립보드 복사",
      "키보드 탐색과 모바일 상세 화면 흐름 지원",
    ],
    tags: ["Search", "Keyboard UX", "Clipboard"],
    live: "https://minkkaeng.github.io/devsnip/",
    repo: "https://github.com/Minkkaeng/devsnip",
    logo: "/img/projects/portfolio.PNG",
    color: "#6c63ff",
  },
  {
    id: 5,
    label: "02 · Korea Career Center",
    role: "팀 프로젝트 · Frontend",
    period: "2026.09",
    title: "한국커리어센터 웹사이트",
    summary:
      "교육 프로그램과 기관 정보를 찾기 쉽도록 콘텐츠 페이지와 탐색 흐름을 구성한 커리어센터 웹사이트입니다.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "기관 소개·교육 프로그램·공지 페이지 구성",
      "모바일 화면을 고려한 내비게이션과 레이아웃 적용",
      "지도·문의 등 외부 서비스 연결 작업 참여",
    ],
    tags: ["Team Project", "Responsive", "Content UI"],
    live: "#",
    repo: "https://github.com/Minkkaeng/Korea-Career-Center",
    logo: "/img/projects/portfolio.PNG",
    color: "#0f766e",
  },
  {
    id: 0,
    label: "03 · UsPetMile",
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
    label: "04 · Play Farm",
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
    label: "05 · OnDa Pet Care",
    role: "개인 프로젝트 · App/Frontend",
    period: "2026.08",
    title: "반려동물 케어 앱",
    summary:
      "반려동물 프로필을 바탕으로 건강 정보와 일정, 일상 기록을 관리하는 모바일 앱입니다.",
    tech: ["React", "TypeScript", "Capacitor", "Dexie.js", "Zustand"],
    highlights: [
      "Dexie.js 기반 로컬 데이터 저장으로 오프라인 사용 지원",
      "여러 반려동물 프로필과 건강·일정·다이어리 화면 구성",
      "Capacitor 기반 모바일 앱 동작과 기기 뒤로 가기 처리",
    ],
    tags: ["Mobile App", "Offline-first", "Pet Care"],
    live: "#",
    repo: "https://github.com/Minkkaeng/OnDa_App",
    logo: "/img/projects/UsPetMile.png",
    color: "#ff8ed2",
  },
  {
    id: 3,
    label: "06 · AppTin",
    role: "개인 프로젝트 · App/Frontend",
    period: "2026.09",
    title: "AI 라이프 & 워크 리포트 앱",
    summary:
      "PC 작업 활동과 Android 앱 사용 기록을 모아 AI 일일 리포트와 루틴 피드백을 제공하는 서비스입니다.",
    tech: ["React", "TypeScript", "Capacitor", "Python", "Gemini API"],
    highlights: [
      "React 기반 모바일 화면과 사용 기록 조회 UI 구성",
      "PC·모바일 사용 데이터를 일일 리포트로 연결",
      "AI 기반 개인화 루틴 피드백 흐름 구현",
    ],
    tags: ["Mobile App", "AI Report", "Usage Tracking"],
    live: "#",
    repo: "https://github.com/Minkkaeng/Apptin",
    logo: "/img/projects/portfolio.PNG",
    color: "#f59e0b",
  },
  {
    id: 7,
    label: "07 · WeWeb",
    role: "팀 프로젝트 · Frontend",
    period: "2026.04",
    title: "WeWeb 크리에이티브 스튜디오",
    summary:
      "브랜드 웹사이트와 쇼핑몰 테마 사례를 소개하고, 프로젝트 문의를 받을 수 있는 크리에이티브 스튜디오 사이트입니다.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    highlights: [
      "브랜드·지식 포털·쇼핑몰 등 반응형 작업 사례 소개",
      "테마 라이브러리와 상세 화면 탐색 흐름 구성",
      "문의 폼과 모바일 내비게이션 구현",
    ],
    tags: ["Studio Website", "Responsive", "Portfolio"],
    live: "https://minkkaeng.github.io/WeWeb/",
    repo: "https://github.com/Minkkaeng/WeWeb",
    logo: "/img/projects/portfolio.PNG",
    color: "#f43f5e",
  },
  {
    id: 8,
    label: "08 · Neoul",
    role: "개인 프로젝트 · App Prototype",
    period: "2026.05",
    title: "지역·문화유산 탐색 앱 프로토타입",
    summary:
      "지역과 문화유산을 지도와 피드로 탐색하고 장소 상세 및 AI 오디오 가이드를 확인하는 모바일 앱 인터랙티브 프로토타입입니다.",
    tech: ["React", "TypeScript", "Vite"],
    highlights: [
      "지역 검색과 지도 기반 탐색 화면 구성",
      "장소 피드·상세·오디오 가이드 사용자 흐름 설계",
      "클릭과 스크롤로 확인할 수 있는 화면 프로토타입 제작",
    ],
    tags: ["Mobile UX", "Map UI", "Prototype"],
    live: "https://minkkaeng.github.io/AI-/",
    repo: "https://github.com/Minkkaeng/AI-",
    logo: "/img/projects/portfolio.PNG",
    color: "#3b82f6",
  },
  {
    id: 9,
    label: "09 · L'Essence Naturelle",
    role: "개인 프로젝트 · Frontend",
    period: "2026.04",
    title: "내추럴 스킨케어 브랜드 웹사이트",
    summary:
      "제품 컬렉션과 브랜드 철학을 소개하고 상품을 탐색할 수 있는 프리미엄 스킨케어 브랜드 사이트입니다.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    highlights: [
      "브랜드 소개·제품 컬렉션·성분 정보 화면 구성",
      "상품과 브랜드 콘텐츠를 잇는 탐색 경험 구현",
      "GitHub Pages 하위 경로 배포에 맞춰 이미지 경로 처리",
    ],
    tags: ["Brand Website", "Product UI", "Responsive"],
    live: "https://minkkaeng.github.io/L-Essence-Naturelle/",
    repo: "https://github.com/Minkkaeng/L-Essence-Naturelle",
    logo: "/img/projects/LEssenceNaturelle.png",
    color: "#4a5d23",
  },
  {
    id: 10,
    label: "10 · Planify",
    role: "개인 프로젝트 · Frontend",
    period: "2025.12",
    title: "할 일·캘린더 플래너",
    summary:
      "할 일, 일정, 설정을 한곳에서 관리하고 오늘의 진행 상황을 확인하는 개인용 플래너입니다.",
    tech: ["React", "Vite", "LocalStorage"],
    highlights: [
      "할 일·캘린더·대시보드 화면 흐름 구성",
      "로컬 저장 기반 데이터 유지와 테마 설정 구현",
      "GitHub Pages 배포 경로 설정 및 검증",
    ],
    tags: ["Productivity", "Calendar", "Local Storage"],
    live: "https://minkkaeng.github.io/Planify/",
    repo: "https://github.com/Minkkaeng/Planify",
    logo: "/img/projects/Planify.png",
    color: "#3b82f6",
  },
  {
    id: 11,
    label: "11 · Airbnb Renewal",
    role: "개인 프로젝트 · Frontend",
    period: "2025.10",
    title: "숙소 검색·예약 UI 리디자인",
    summary:
      "숙소 목록을 살펴보고 상세 정보를 확인해 예약하는 흐름을 React로 구현한 숙박 서비스 UI입니다.",
    tech: ["React", "React Router"],
    highlights: [
      "숙소 카드와 카테고리 기반 목록 화면 구성",
      "상세 모달과 예약 관련 인터랙션 구현",
      "새로고침 시 상세 이미지 경로가 깨지는 문제 수정",
    ],
    tags: ["Search UI", "Modal", "Responsive"],
    live: "https://minkkaeng.github.io/AirBnB/",
    repo: "https://github.com/Minkkaeng/AirBnB",
    logo: "/img/projects/Airbnb.png",
    color: "#ff5a5f",
  },
  {
    id: 12,
    label: "12 · The GamSung",
    role: "개인 프로젝트 · Web Publishing",
    period: "2025.08",
    title: "인테리어 가구 쇼핑몰",
    summary:
      "가구와 조명 컬렉션을 둘러보고 카테고리별 상품과 쇼룸을 확인하는 반응형 쇼핑몰 웹사이트입니다.",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "가구·조명·쇼룸 등 다중 페이지 구성",
      "상품 카테고리와 장바구니 UI 구현",
      "반복되는 상품 카드와 배너 스타일 정리",
    ],
    tags: ["E-commerce", "Publishing", "Multi-page"],
    live: "https://minkkaeng.github.io/The-GamSung/",
    repo: "https://github.com/Minkkaeng/The-GamSung",
    logo: "/img/projects/TheGamSung.png",
    color: "#d4a373",
  },
  {
    id: 13,
    label: "13 · React Monorepo",
    role: "개인 프로젝트 · Frontend Architecture",
    period: "2026.04",
    title: "재사용 React 패키지 모노레포",
    summary:
      "UI 컴포넌트, 공통 훅, 상태 관리, 유틸리티와 개발 설정을 패키지 단위로 나눈 TypeScript 모노레포입니다.",
    tech: ["React", "TypeScript", "Turborepo", "Tailwind CSS"],
    highlights: [
      "컴포넌트·훅·스토어·유틸리티 패키지 분리",
      "여러 앱에서 재사용할 UI 컴포넌트와 공통 설정 구성",
      "패키지 경계와 공유 타입을 고려한 프로젝트 구조 설계",
    ],
    tags: ["Monorepo", "Reusable UI", "Architecture"],
    live: "#",
    repo: "https://github.com/Minkkaeng/Monorepo",
    logo: "/img/projects/portfolio.PNG",
    color: "#7c3aed",
  },
  {
    id: 14,
    label: "14 · Swell",
    role: "팀 프로젝트 · Mobile App",
    period: "2026.03",
    title: "Swell 모바일 앱 프론트엔드",
    summary:
      "React Native와 Expo 기반으로 모바일 앱 화면과 네이티브 기능을 구성한 크로스플랫폼 프로젝트입니다.",
    tech: ["React Native", "Expo", "TypeScript", "Zustand"],
    highlights: [
      "iOS·Android 앱을 위한 React Native 화면 구성",
      "소셜 로그인 및 푸시 알림 관련 앱 기능 연동",
      "Expo 기반 모바일 개발·배포 환경 설정",
    ],
    tags: ["Mobile App", "React Native", "Expo"],
    live: "#",
    repo: "https://github.com/Minkkaeng/Swell",
    logo: "/img/projects/portfolio.PNG",
    color: "#0ea5e9",
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
        <h2 className="projects-title">선택한 프로젝트</h2>
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
