import { motion } from "framer-motion";
import { User, Code2, Rocket, Palette } from "lucide-react";

function About() {
  const cards = [
    {
      icon: <Code2 className="text-accent" size={24} />,
      title: "구조적인 개발",
      desc: "유지보수가 용이한 컴포넌트 설계와 명확한 데이터 흐름을 기반으로 견고한 애플리케이션을 구축합니다.",
    },
    {
      icon: <Palette className="text-[#ff8ed2]" size={24} />,
      title: "화면 설계와 구현",
      desc: "화면의 목적과 사용 흐름을 정리한 뒤, 재사용 가능한 React 컴포넌트로 구현합니다.",
    },
    {
      icon: <User className="text-accent" size={24} />,
      title: "사용자 중심",
      desc: "검색, 필터, 폼처럼 자주 쓰는 인터랙션을 사용자가 예측하기 쉽게 구성합니다.",
    },
    {
      icon: <Rocket className="text-[#ff8ed2]" size={24} />,
      title: "협업과 개선",
      desc: "팀 프로젝트에서 요구사항을 확인하고, 피드백을 반영해 화면을 꾸준히 다듬습니다.",
    },
  ];

  return (
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="about-profile-col"
      >
        <div className="about-header-wrapper">
          <span className="about-section-label">Profile</span>
          <h2 className="about-section-title">About Me</h2>
        </div>

        <div className="about-body-wrapper">
          <h3 className="about-sub-title">
            사용하기 쉬운 화면을 <br />
            <span className="about-highlight-text">꾸준히 고민하고 구현합니다.</span>
          </h3>
          <p className="about-lead-paragraph">
            프론트엔드 개발자로 취업을 준비하며 개인·팀 프로젝트를 통해 웹과 앱을 만들고 있습니다.
            <br /> 화면을 컴포넌트로 나누고, 데이터와 상태가 자연스럽게 이어지도록 구현하는 데 집중합니다.
          </p>
          <p className="about-paragraph">
            익숙하지 않은 기술도 작은 기능부터 직접 적용하고, 동작과 사용성을 확인하며 개선하는 개발자가 되겠습니다.
          </p>

          <div className="about-badge-wrapper">
            {["React", "TypeScript", "Responsive UI", "Web & App"].map((badge) => (
              <span key={badge} className="about-badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="about-card-grid">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="about-card"
          >
            <div className="about-card-inner">
              <div className="about-icon-wrapper">{card.icon}</div>
              <div>
                <h4 className="about-card-title">{card.title}</h4>
                <p className="about-card-desc">{card.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
