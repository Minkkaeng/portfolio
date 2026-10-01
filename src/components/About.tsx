import { motion } from "framer-motion";
import { User, Code2, Rocket, Palette } from "lucide-react";

function About() {
  const cards = [
    {
      icon: <Code2 className="text-accent" size={24} />,
      title: "구조적인 개발",
      desc: "",
    },
    {
      icon: <Palette className="text-[#ff8ed2]" size={24} />,
      title: "화면 설계와 구현",
      desc: "",
    },
    {
      icon: <User className="text-accent" size={24} />,
      title: "사용자 중심",
      desc: "",
    },
    {
      icon: <Rocket className="text-[#ff8ed2]" size={24} />,
      title: "협업과 개선",
      desc: "",
    },
  ];

  return (
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="about-profile-col"
      >
        <div className="about-header-wrapper">
          <span className="about-section-label">Profile</span>
          <h2 className="about-section-title">About Me</h2>
        </div>

        <div className="about-body-wrapper">
          <h3 className="about-sub-title">
            화면의 목적을 이해하고 <br />
            <span className="about-highlight-text">사용하기 쉽게 구현합니다.</span>
          </h3>
          <p className="about-lead-paragraph">
            개발자로 취업을 준비하며 개인·팀 프로젝트를 통해 웹과 앱을 만들고 있습니다.
            <br /> 화면을 컴포넌트로 나누고, 사용 흐름이 자연스럽게 이어지도록 구현합니다.
          </p>
          <p className="about-paragraph">
            새로운 기술은 작은 기능부터 적용하고, 실제 동작을 확인하며 개선하는 과정을 중요하게 생각합니다.
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
              <h4 className="about-card-title">{card.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
