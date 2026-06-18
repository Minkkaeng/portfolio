import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getImagePath } from "../utils/imagePath";

type Skill = {
  name: string;
  icon: string;
  desc: string;
  detail: string;
};

const skillsMain: Skill[] = [
  {
    name: "HTML5",
    icon: "/img/html.png",
    desc: "시맨틱 태그, 접근성, 구조 설계",
    detail:
      "섹션, 네비게이션, 아티클 등 시맨틱 태그로 구조를 명확히 나누고, 스크린 리더를 고려한 마크업을 작성합니다. 리스트/테이블/폼 구조를 상황에 맞게 선택합니다.",
  },
  {
    name: "CSS3 / Layout",
    icon: "/img/css3.png",
    desc: "Flex, Grid, 반응형, 컴포넌트화",
    detail:
      "Flex와 Grid를 상황에 맞게 섞어서 레이아웃을 구성하고, 토큰 기반으로 색상/간격/타이포를 관리합니다. 반응형 브레이크포인트를 미리 정의합니다.",
  },
  {
    name: "JavaScript",
    icon: "/img/js.png",
    desc: "상태, DOM, 인터랙션 구성",
    detail:
      "이벤트 기반으로 상태를 관리하고 사용자 액션에 따라 DOM을 업데이트하는 흐름을 설계합니다. 모달/탭/필터 등 UI 패턴 구현 경험이 있습니다.",
  },
  {
    name: "React",
    icon: "/img/react.png",
    desc: "컴포넌트 설계, 라우팅 구조 이해",
    detail:
      "페이지를 컴포넌트 단위로 나누고 props/state 흐름을 정리합니다. React Router로 라우팅을 구성하고 공통 레이아웃을 분리합니다.",
  },
  {
    name: "Git / GitHub",
    icon: "/img/github.png",
    desc: "브랜치, 협업, 배포 경험",
    detail:
      "기능 단위 커밋/브랜치 분리 경험이 있고, GitHub Pages 배포 과정에서 base 경로/충돌 해결 등 트러블슈팅을 해봤습니다.",
  },
];

const skillsSupport: Skill[] = [
  {
    name: "Photoshop",
    icon: "/img/ps.png",
    desc: "이미지 보정, 배너 제작",
    detail: "간단한 사진 보정, 합성, 썸네일/배너 제작이 가능합니다. 웹용 해상도/용량 최적화를 고려합니다.",
  },
  {
    name: "AI - Canvas",
    icon: "/img/canva.svg",
    desc: "프로토타이핑, 비주얼 에셋 제작",
    detail: "Canva 등 AI 도구를 활용한 신속한 UI 프로토타이핑 및 비주얼 에셋 제작이 가능합니다.",
  },
  {
    name: "Antigravity",
    icon: "/img/antigravity.svg",
    desc: "코드 품질, 생산성 최적화",
    detail: "AI 워크플로우를 통한 개발 생산성 및 코드 품질 최적화를 수행합니다.",
  },
];

function Skills() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <div className="skills-container">
      <div className="skills-header-wrapper">
        <span className="skills-badge">Skills</span>
        <h2 className="skills-title">What I build with</h2>
      </div>

      <div className="skills-sections-wrapper">
        <div>
          <h3 className="skills-section-heading">
            <span className="skills-heading-line-accent" /> Core Tech Stack
          </h3>
          <div className="skills-grid-main">
            {skillsMain.map((skill, index) => (
              <motion.button
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveSkill(skill)}
                className="skills-card-main group"
              >
                <div className="skills-icon-wrapper-main group-hover:rotate-6">
                  <img src={getImagePath(skill.icon)} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <div className="skills-card-text-wrapper">
                  <h4 className="skills-card-title">{skill.name}</h4>
                  <p className="skills-card-desc">{skill.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="skills-section-heading">
            <span className="skills-heading-line-pink" /> Design & System
          </h3>
          <div className="skills-grid-support">
            {skillsSupport.map((skill, index) => (
              <motion.button
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveSkill(skill)}
                className="skills-card-support group"
              >
                <div className="skills-icon-wrapper-support group-hover:rotate-6">
                  <img src={getImagePath(skill.icon)} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <div className="skills-card-text-wrapper">
                  <h4 className="skills-card-title">{skill.name}</h4>
                  <p className="skills-card-desc-support">{skill.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeSkill && (
          <div className="skills-modal-overlay">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSkill(null)}
              className="skills-modal-bg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="skills-modal-card"
            >
              <button
                onClick={() => setActiveSkill(null)}
                className="skills-modal-close-btn"
              >
                <X size={24} />
              </button>

              <div className="skills-modal-header">
                <div className="skills-modal-icon-wrapper">
                  <img
                    src={getImagePath(activeSkill.icon)}
                    alt={activeSkill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="skills-modal-header-title-wrapper">
                  <span className="skills-modal-sub-label">
                    Skill Detail
                  </span>
                  <h3 className="skills-modal-title">{activeSkill.name}</h3>
                </div>
              </div>

              <div className="skills-modal-content">
                <p className="skills-modal-desc">{activeSkill.desc}</p>
                <div className="skills-modal-divider" />
                <p className="skills-modal-detail">{activeSkill.detail}</p>
              </div>

              <div className="skills-modal-decor" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Skills;
