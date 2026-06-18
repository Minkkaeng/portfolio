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
      title: "UI/UX 디자인",
      desc: "심미성과 기능성의 균형을 맞춘 인터페이스를 설계하며, 사용자 경험을 최우선으로 고려합니다.",
    },
    {
      icon: <User className="text-accent" size={24} />,
      title: "사용자 중심",
      desc: "사용자의 여정을 분석하고, 더 나은 해결책을 제시하기 위해 끊임없이 인터랙션을 고민합니다.",
    },
    {
      icon: <Rocket className="text-[#ff8ed2]" size={24} />,
      title: "성장과 책임",
      desc: "팀 프로젝트의 UI/UX 설계부터 구현까지 주도적으로 참여하며 결과물에 대한 깊은 책임감을 가집니다.",
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
            생각의 깊이를 <br />
            <span className="about-highlight-text">디자인과 코드로 증명합니다.</span>
          </h3>
          <p className="about-lead-paragraph">
            단순히 기능을 구현하는 것을 넘어, 사용자가 제품과 상호작용하는 모든 순간을 디자인합니다. <br />
            Figma를 활용한 프로토타이핑부터 React 기반의 정교한 구현까지, <br />
            디자인과 개발의 경계를 허무는 것을 목표로 합니다.
          </p>
          <p className="about-paragraph">
            안정적인 상태 관리와 컴포넌트 설계는 기본이며, 여기에 타이포그래피, 컬러 시스템, 마이크로 인터랙션을 더해
            프로젝트의 완성도를 한 단계 끌어올리는 작업을 즐깁니다.
          </p>

          <div className="about-badge-wrapper">
            {["Design Systems", "User Experience", "Pixel Perfection", "Figma to Code"].map((badge) => (
              <span
                key={badge}
                className="about-badge"
              >
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
              <div className="about-icon-wrapper">
                {card.icon}
              </div>
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
