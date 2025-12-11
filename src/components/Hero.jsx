function Hero() {
  return (
    <div className="hero-inner">
      <div className="hero-left">
        <p className="hero-kicker">Quiet · Focused · Detail-Obsessed</p>
        <h1>
          조용하지만
          <br />
          결과물은 크게 남기는
          <span> 프론트엔드 개발자</span>
        </h1>
        <p className="hero-lead">
          The GamSung · Play Farm · Airbnb Renewal
          <br />세 개의 프로젝트로 디자인과 코드, 모두 직접 다뤘습니다.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View projects
          </a>
          <a href="#skills" className="btn-ghost">
            My skills
          </a>
        </div>

        <div className="hero-tags">
          <span className="tag">HTML · CSS · JS · React</span>
          <span className="tag">UI Layout · 반응형</span>
          <span className="tag">팀 프로젝트 경험</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card hero-card-main">
          <p className="hero-label">Recent work</p>
          <p className="hero-main-text">
            Web experiences
            <br />
            with calm but strong personality.
          </p>
        </div>

        <div className="hero-grid-small">
          <div className="hero-card small">
            <span className="pill">The GamSung</span>
            <p>인테리어 감성 쇼핑몰 퍼블리싱</p>
          </div>
          <div className="hero-card small">
            <span className="pill">Play Farm</span>
            <p>농장 체험 풀스택 웹 서비스</p>
          </div>
          <div className="hero-card small">
            <span className="pill">Airbnb Renewal</span>
            <p>숙소 검색 UX 리디자인 · React</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
