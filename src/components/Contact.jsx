function Contact() {
  const handleCopy = () => {
    const email = "choi90326@gmail.com";
    navigator.clipboard?.writeText(email).catch(() => null);
    alert("메일 주소가 클립보드에 복사되었습니다.");
  };

  return (
    <div className="section-inner contact-inner">
      <div className="section-header">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s talk</h2>
      </div>

      <p className="contact-text">
        새로운 팀, 새로운 서비스, 새로운 화면에 관심이 많습니다.
        <br />
        함께 만들고 싶은 것이 있다면 메일로 편하게 연락 주세요.
      </p>

      <div className="contact-box">
        <span className="contact-email">choi90326@gmail.com</span>
        <button type="button" className="btn-copy" onClick={handleCopy}>
          Copy
        </button>
      </div>
    </div>
  );
}

export default Contact;
