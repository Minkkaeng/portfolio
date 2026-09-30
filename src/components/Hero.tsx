import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text-column">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="hero-badge">
            프론트엔드 개발자 · 취업 준비 중
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-main-heading"
        >
          필요한 정보를 <br />
          <span className="hero-highlight-text">
            명확한 화면으로
          </span>{" "}
          <br />
          구현합니다
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-description"
        >
          React와 TypeScript로 웹과 앱의 화면을 만들고, <br className="hidden md:block" />
          사용자가 쉽게 이해하고 사용할 수 있는 흐름을 고민합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-button-area"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="hero-primary-btn group"
          >
            프로젝트 보기 <ArrowRight size={18} className="hero-primary-btn-icon group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="hero-secondary-btn"
          >
            연락하기
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hero-tag-area"
        >
          {["React", "TypeScript", "UI/UX Design", "Figma", "Tailwind"].map((tag) => (
            <span
              key={tag}
              className="hero-tag"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-visual-column"
      >
        <div className="hero-visual-container">
          <div className="hero-background-blur" />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hero-card"
          >
            <div className="hero-card-bar-area">
              <div className="hero-card-bar-short" />
              <div className="hero-card-bar-long" />
            </div>
            <h3 className="hero-card-title">
              Frontend <br />& User Experience
            </h3>
            <p className="hero-card-desc">
              React와 TypeScript로 화면을 만들고
              <br /> 사용 흐름을 세심하게 다듬습니다.
            </p>
            <div className="hero-card-grid">
              <div className="hero-card-grid-item">
                <p className="hero-card-grid-item-label text-accent">Build</p>
                <p className="hero-card-grid-item-val">Responsive UI</p>
              </div>
              <div className="hero-card-grid-item">
                <p className="hero-card-grid-item-label text-[#ff8ed2]">Care</p>
                <p className="hero-card-grid-item-val">Clear UX</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hero-floating-tag"
          >
            <div className="hero-floating-tag-indicator" />
            <span className="hero-floating-tag-text">Open to opportunities</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hero-scroll-down-indicator"
      >
        <ChevronDown size={24} />
      </motion.div>
    </div>
  );
}

export default Hero;
