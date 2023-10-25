import "./BackToTop.css";

export default function BackToTop() {
  return (
    <a
      className="backToTop-btn"
      href="#about"
      aria-hidden="true"
      aria-label="Back to top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
}
