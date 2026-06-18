import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, Send } from "lucide-react";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "choi90326@gmail.com";

  const handleCopy = () => {
    navigator.clipboard
      ?.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => null);
  };

  return (
    <div className="contact-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="contact-header-wrapper"
      >
        <span className="contact-badge">Contact</span>
        <h2 className="contact-title">Let's build something legacy</h2>
        <p className="contact-description">
          새로운 서비스, 도전적인 프로젝트에 관심이 많습니다. <br />
          함께 성장하고 싶은 팀이나 제안이 있다면 편하게 연락 주세요.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="contact-card-wrapper"
      >
        <div className="contact-card">
          <div className="contact-email-section">
            <div className="contact-icon-wrapper">
              <Mail size={20} />
            </div>
            <span className="contact-email-text">{email}</span>
          </div>

          <div className="contact-actions-wrapper">
            <button
              onClick={handleCopy}
              className="contact-copy-btn"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="contact-copy-success"
                  >
                    <Check size={18} /> Copied!
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="contact-copy-normal"
                  >
                    <Copy size={18} /> Copy
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <a
              href={`mailto:${email}`}
              className="contact-mail-link"
            >
              Send Mail <Send size={18} />
            </a>
          </div>
        </div>

        {/* Decor circles */}
        <div className="contact-decor-accent" />
        <div className="contact-decor-pink" />
      </motion.div>
    </div>
  );
}

export default Contact;
