import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

// import node from "../../assets/icons/node.svg";
// import express from "../../assets/icons/express.svg";
// import github from "../../assets/icons/github.svg";
// import pug from "../../assets/icons/pug.svg";
// import aws from "../../assets/icons/aws.svg";
// import palm2 from "../../assets/icons/palm2.svg";

export default function ProjectFour({
  projectFour,
  videoSrcArray4,
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

      setProjectName(data[3].projectName);
      setBlurb(data[3].blurb);
      setLiveURL(data[3].liveURL);
      setGithubURL(data[3].githubURL);
    };
    getProject();
  }, []);

  return (
    <article className="project-four">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">{projectName}</h3>
        </div>
        <div className="project-description-and-live-preview-button">
          <div className="video-wrapper"></div>
          {isTabletPlaying ? (
            <video
              controls
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
              src={projectFour}
              alt="A screenshot of my project 4"
            />
          )}
          <video controls className="video-tablet">
            <source type="video/mp4" className="video-tablet-source" />
          </video>
          <p className="project-description">{blurb}</p>
          <div className="intersecting-element" data-img="3"></div>
          <h4 className="project-description">Key Features:</h4>
          <div className="hover-wrapper">
            {videoSrcArray4.map((_, index) => (
              <button
                className="hover4 hover"
                onMouseOver={(e) => changeVideo(e, index)}
                key={index}
              >
                {
                  [
                    "Autocomplete with Datamuse API",
                    "Recipe Generation By LLM",
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
              src={node}
              alt="node"
              data-tooltip-id="node-tooltip"
              data-tooltip-content="Node.js"
            />
            <Tooltip id="node-tooltip" />
            <img
              src={express}
              alt="express"
              data-tooltip-id="express-tooltip"
              data-tooltip-content="Express.js"
            />
            <Tooltip id="express-tooltip" />
            <img
              src={pug}
              alt="pug"
              data-tooltip-id="pug-tooltip"
              data-tooltip-content="Pug.js"
            />
            <Tooltip id="pug-tooltip" />
            <img
              src={palm2}
              alt="Pathways Language Model"
              data-tooltip-id="palm2-tooltip"
              data-tooltip-content="Pathways Language Model by Google AI"
            />
            <Tooltip id="palm2-tooltip" />
            <img
              src={aws}
              alt="Amazon Web Services"
              data-tooltip-id="aws-tooltip"
              data-tooltip-content="Amazon Web Services"
            />
            <Tooltip id="aws-tooltip" />
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
