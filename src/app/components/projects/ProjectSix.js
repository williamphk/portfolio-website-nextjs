import { Tooltip } from "react-tooltip";

// import javascript from "../../assets/icons/javascript.svg";
// import html from "../../assets/icons/html.svg";
// import css from "../../assets/icons/css.svg";
// import github from "../../assets/icons/github.svg";

export default function ProjectSix({ projectSix }) {
  return (
    <article className="project-six">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">Checkbox Snake</h3>
        </div>
        <div className="project-description-and-live-preview-button">
          <img
            className="project-image-tablet"
            src={projectSix}
            alt="A screenshot of my project 6"
          />
          <p className="project-description">
            Can you play Snake with checkbox? I created it to find out.
          </p>
          <div className="intersecting-element" data-img="5"></div>
          <h4 className="project-description">Key Features:</h4>
          <div className="hover-wrapper">
            <button className="hover6 hover">Control by keyboard</button>
            <button className="hover6 hover">Scoreboard</button>
          </div>
          {/* <div className="project-description">
            <img
              src={html}
              alt="html"
              data-tooltip-id="html-tooltip"
              data-tooltip-content="HTML"
            />
            <Tooltip id="html-tooltip" />
            <img
              src={css}
              alt="css"
              data-tooltip-id="css-tooltip"
              data-tooltip-content="CSS"
            />
            <Tooltip id="css-tooltip" />
            <img
              src={javascript}
              alt="js"
              data-tooltip-id="js-tooltip"
              data-tooltip-content="JavaScript"
            />
            <Tooltip id="js-tooltip" />
            <img
              src={github}
              alt="github"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="Github"
            />
            <Tooltip id="github-tooltip" />
          </div> */}
          <div className="project-button-wrapper">
            <a
              href="https://github.com/williamphk/Useless-Web"
              className="live-preview-button"
              target="_blank"
            >
              Source Code
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a
              href="https://williamphk.github.io/Useless-Web/"
              className="live-preview-button"
              target="_blank"
            >
              Live Preview
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
