import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

// import javascript from "../../assets/icons/javascript.svg";
// import html from "../../assets/icons/html.svg";
// import css from "../../assets/icons/css.svg";
// import webpack from "../../assets/icons/webpack.svg";
// import github from "../../assets/icons/github.svg";

export default function ProjectThree({
  projectThree,
  videoSrcArray3,
  currentVideoIndex,
  changeVideo,
  isPlaying,
  isTabletPlaying,
  setIsTabletPlaying,
  currentVideoSrc,
  tabletVideoWidth,
  tabletVideoHeight,
}) {
  const [projectName, setProjectName] = useState("");
  const [blurb, setBlurb] = useState("");
  const [liveURL, setLiveURL] = useState("");
  const [githubURL, setGithubURL] = useState("");

  useEffect(() => {
    const getProject = async () => {
      const response = await fetch("/project.json");
      const data = await response.json();

      setProjectName(data[2].projectName);
      setBlurb(data[2].blurb);
      setLiveURL(data[2].liveURL);
      setGithubURL(data[2].githubURL);
    };
    getProject();
  }, []);

  return (
    <article className="project-three">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">{projectName}</h3>
        </div>
        <div className="project-description-and-live-preview-button">
          {isTabletPlaying ? (
            <video
              controls
              className="video-tablet"
              width={tabletVideoWidth}
              height={tabletVideoHeight}
              style={{ display: isTabletPlaying ? "block" : "none" }}
              onEnded={() => setIsTabletPlaying(false)}
              src={currentVideoSrc}
              autoPlay
            />
          ) : (
            <img
              className="project-image-tablet"
              src={projectThree}
              alt="A screenshot of my project 3"
            />
          )}

          <p className="project-description">{blurb}</p>
          <div className="intersecting-element" data-img="2"></div>
          <h4 className="project-description">Key Features:</h4>
          <div className="hover-wrapper">
            {videoSrcArray3.map((_, index) => (
              <button
                className="hover3 hover"
                onMouseOver={(e) => changeVideo(e, index)}
                key={index}
              >
                {
                  [
                    "Drag and drop to position your fleet",
                    "Click to launch strikes and sink enemy ships",
                    "Quick restart option for new challenges",
                  ][index]
                }
                <span className="material-symbols-outlined">
                  {currentVideoIndex === index && isPlaying
                    ? "stop_circle"
                    : "play_circle"}
                </span>
              </button>
            ))}
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
              src={webpack}
              alt="webpack"
              data-tooltip-id="webpack-tooltip"
              data-tooltip-content="Webpack"
            />
            <Tooltip id="webpack-tooltip" />
            <img
              src={github}
              alt="github"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="Github"
            />
            <Tooltip id="github-tooltip" />
          </div> */}
          <div className="project-button-wrapper">
            <a href={githubURL} className="live-preview-button" target="_blank">
              Source Code
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a href={liveURL} className="live-preview-button" target="_blank">
              Live Preview
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
