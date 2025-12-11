const projects = [
  {
    id: 1,
    label: "01 · The GamSung",
    role: "개인 프로젝트 · HTML / CSS / JS",
    title: "감성 인테리어 쇼핑몰 웹사이트",
    summary: "따뜻한 톤앤매너의 인테리어 상품 쇼핑몰. 메인 · 카테고리 · 상세 · 기획전 페이지를 퍼블리싱했습니다.",
    tags: ["Responsive layout", "토큰 기반 컬러 시스템", "배너 · 카드 컴포넌트"],
    link: "https://minkkaeng.github.io/portfolio_interior-shop/",
  },
  {
    id: 2,
    label: "02 · Play Farm",
    role: "팀 프로젝트 · Fullstack (React / Node)",
    title: "농장 체험 예약 플랫폼",
    summary:
      "지역 농장 체험을 검색 · 필터 · 예약까지 할 수 있는 서비스. 목록 · 상세 · 이벤트 · 로그인 UI 설계 및 구현을 담당했습니다.",
    tags: ["React Router", "리스트/상세 구조", "이벤트·공지 모듈"],
    link: "#", // 나중에 실제 링크 넣기
  },
  {
    id: 3,
    label: "03 · Airbnb Renewal",
    role: "개인 프로젝트 · React",
    title: "숙소 검색 UX 리디자인",
    summary: "Airbnb 메인 화면을 기준으로 검색 흐름과 카드 UI를 정리해 React로 재구현했습니다.",
    tags: ["Modal · 필터 UX", "카테고리 스크롤", "반응형 카드 그리드"],
    link: "https://minkkaeng.github.io/portfolio_AirBnB/",
  },
];

function Projects() {
  return (
    <div className="section-inner projects-inner">
      <div className="section-header">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
      </div>

      <div className="timeline">
        {projects.map((p, index) => (
          <article key={p.id} className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-dot" />
              <span className="timeline-label">{p.label}</span>
              <span className="timeline-role">{p.role}</span>
            </div>

            <div className="timeline-content">
              <h3>{p.title}</h3>
              <p className="timeline-summary">{p.summary}</p>
              <ul className="timeline-tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {p.link !== "#" && (
                <a className="timeline-link" href={p.link} target="_blank" rel="noreferrer">
                  View live ↗
                </a>
              )}
            </div>

            <div className="timeline-index">{`0${index + 1}`}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
