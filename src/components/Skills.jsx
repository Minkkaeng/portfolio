const skillsMain = [
  { name: "HTML5", desc: "시맨틱 태그, 접근성, 구조 설계" },
  { name: "CSS3 / Layout", desc: "Flex, Grid, 반응형, 컴포넌트화" },
  { name: "JavaScript", desc: "상태, DOM, 인터랙션 구성" },
  { name: "React", desc: "컴포넌트 설계, 라우팅 구조 이해" },
  { name: "Git / GitHub", desc: "브랜치, 협업, 배포 경험" },
];

const skillsSupport = [
  { name: "Design System", desc: "컬러 토큰 · 타입 스케일 설계" },
  { name: "Photoshop", desc: "이미지 보정, 배너 제작" },
  { name: "Illustrator", desc: "로고, 아이콘, 심볼 작업" },
];

function Skills() {
  return (
    <div className="section-inner skills-inner">
      <div className="section-header">
        <p className="eyebrow">Skills</p>
        <h2>What I build with</h2>
      </div>

      <div className="skills-grid-main">
        {skillsMain.map((skill) => (
          <div key={skill.name} className="skill-card main">
            <div className="skill-top">
              <span className="skill-dot" />
              <h3>{skill.name}</h3>
            </div>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>

      <div className="skills-subtitle">Design & system thinking</div>

      <div className="skills-grid-sub">
        {skillsSupport.map((skill) => (
          <div key={skill.name} className="skill-card sub">
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
