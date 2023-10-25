"use client";

import { useState, useEffect, useRef } from "react";

import "./Projects.css";

import ProjectOne from "./projects/ProjectOne.js";
import ProjectTwo from "./projects/ProjectTwo.js";
import ProjectThree from "./projects/ProjectThree.js";
import ProjectFour from "./projects/ProjectFour.js";
import ProjectFive from "./projects/ProjectFive.js";
import ProjectSix from "./projects/ProjectSix.js";

// import projectOne from "../assets/project-one.webp";
// import projectTwo from "../assets/project-two.webp";
// import projectThree from "../assets/project-three.webp";
// import projectFour from "../assets/project-four.webp";
// import projectFive from "../assets/project-five.webp";
// import projectSix from "../assets/project-six.png";

// import register from "../assets/videos/Project_1/Register.mp4";
// import oauth from "../assets/videos/Project_1/OAuth.mp4";
// import post from "../assets/videos/Project_1/Post.mp4";
// import friend from "../assets/videos/Project_1/Friend.mp4";
// import profile from "../assets/videos/Project_1/Profile.mp4";

// import drag from "../assets/videos/Project_3/Drag-n-drop.mp4";
// import click from "../assets/videos/Project_3/Click.mp4";
// import restart from "../assets/videos/Project_3/Restart.mp4";

// import autocomplete from "../assets/videos/Project_4/Autocomplete.mp4";
// import recipe from "../assets/videos/Project_4/Recipe.mp4";

export default function Projects() {
  const [intersectingImageArray, setIntersectingImageArray] = useState([]);
  const observeElementsRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isTablet, setIsTablet] = useState(false);

  const imageArray = [
    "./images/project-one.webp",
    "./images/project-two.webp",
    "./images/project-three.webp",
    "./images/project-four.webp",
    "./images/project-five.webp",
    "./images/project-six.png",
  ];

  const [currentVideoSrc, setCurrentVideoSrc] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTabletOnePlaying, setIsTabletOnePlaying] = useState(false);
  const [isTabletThreePlaying, setIsTabletThreePlaying] = useState(false);
  const [isTabletFourPlaying, setIsTabletFourPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const videoSrcArray1 = [
    "./videos/Project_1/Register.mp4",
    "./videos/Project_1/OAuth.mp4",
    "./videos/Project_1/Post.mp4",
    "./videos/Project_1/Friend.mp4",
    "./videos/Project_1/Profile.mp4",
  ];
  const videoSrcArray3 = [
    "./videos/Project_3/Drag-n-drop.mp4",
    "./videos/Project_3/Click.mp4",
    "./videos/Project_3/Restart.mp4",
  ];
  const videoSrcArray4 = [
    "./videos/Project_4/Autocomplete.mp4",
    "./videos/Project_4/Recipe.mp4",
  ];

  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  const [tabletVideoWidth, setTabletVideoWidth] = useState(0);
  const [tabletVideoHeight, setTabletVideoHeight] = useState(0);
  const [mediaQueryTablet, setMediaQueryTablet] = useState(false);

  useEffect(() => {
    const computeSizes = () => {
      setVideoWidth(window.innerWidth / 2 - 40);
      setVideoHeight(((window.innerWidth / 2 - 40) * 9) / 16);
      setTabletVideoWidth(window.innerWidth);
      setTabletVideoHeight((window.innerWidth * 9) / 16);
      setMediaQueryTablet(window.matchMedia("(max-width: 1200px)"));
    };

    computeSizes();

    window.addEventListener("resize", computeSizes);

    return () => {
      window.removeEventListener("resize", computeSizes);
    };
  }, []);

  //   const videoWidth = window.innerWidth / 2 - 40;
  //   const videoHeight = ((window.innerWidth / 2 - 40) * 9) / 16;
  //   const tabletVideoWidth = window.innerWidth;
  //   const tabletVideoHeight = (window.innerWidth * 9) / 16;

  //   const mediaQueryTablet = window.matchMedia("(max-width: 1200px)");

  useEffect(() => {
    mediaQueryTablet.matches ? setIsTablet(true) : setIsTablet(false);
  }, [mediaQueryTablet]);

  useEffect(() => {
    const rootMargin = isTablet ? "400px" : "0px";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const imageID = entry.target.getAttribute("data-img");

          if (entry.isIntersecting) {
            console.log("intersecting");
            setIsPlaying(false);
            if (isTablet) setIsTabletOnePlaying(false);
            if (isTablet) setIsTabletThreePlaying(false);
            if (isTablet) setIsTabletFourPlaying(false);
            entry.target.parentElement.parentElement.classList.add("show");
            if (!intersectingImageArray.includes(imageID)) {
              setIntersectingImageArray([...intersectingImageArray, imageID]);
            }
          } else {
            const index = intersectingImageArray.indexOf(imageID);
            if (index > -1) {
              setIntersectingImageArray((prevArray) =>
                prevArray.filter((id) => id !== imageID)
              );
            }
            if (intersectingImageArray.length > 0) {
              setCurrentImageIndex(
                intersectingImageArray[intersectingImageArray.length - 1]
              );
            }
          }
        });
      },
      { rootMargin }
    );

    observeElementsRef.current
      .querySelectorAll(".intersecting-element")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup on unmount
  }, [intersectingImageArray]);

  const changeVideo = (e, index) => {
    const hoverClass = e.target.className;
    let src;

    if (
      hoverClass.includes("hover1") ||
      e.target.parentElement.className.includes("hover1")
    ) {
      src = videoSrcArray1[index];
      if (isTablet) setIsTabletOnePlaying(true);
    } else if (
      hoverClass.includes("hover3") ||
      e.target.parentElement.className.includes("hover3")
    ) {
      src = videoSrcArray3[index];
      if (isTablet) setIsTabletThreePlaying(true);
    } else if (
      hoverClass.includes("hover4") ||
      e.target.parentElement.className.includes("hover4")
    ) {
      src = videoSrcArray4[index];
      if (isTablet) setIsTabletFourPlaying(true);
    }

    setCurrentVideoIndex(index);
    setCurrentVideoSrc(src);
    setIsPlaying(true);
  };

  return (
    <section className="work" id="work">
      <h2 className="section-title">Crafted with Heart</h2>
      <div className="project-wrapper">
        <div className="project" ref={observeElementsRef}>
          <ProjectOne
            projectOne="./images/project-one.webp"
            videoSrcArray1={videoSrcArray1}
            currentVideoIndex={currentVideoIndex}
            changeVideo={changeVideo}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            isTabletPlaying={isTabletOnePlaying}
            setIsTabletPlaying={setIsTabletOnePlaying}
            currentVideoSrc={currentVideoSrc}
            tabletVideoWidth={tabletVideoWidth}
            tabletVideoHeight={tabletVideoHeight}
          />
          <ProjectTwo projectTwo="./images/project-two.webp" />
          <ProjectThree
            projectThree="./images/project-three.webp"
            videoSrcArray3={videoSrcArray3}
            currentVideoIndex={currentVideoIndex}
            changeVideo={changeVideo}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            isTabletPlaying={isTabletThreePlaying}
            setIsTabletPlaying={setIsTabletThreePlaying}
            currentVideoSrc={currentVideoSrc}
            tabletVideoWidth={tabletVideoWidth}
            tabletVideoHeight={tabletVideoHeight}
          />
          <ProjectFour
            projectFour="./images/project-four.webp"
            videoSrcArray4={videoSrcArray4}
            currentVideoIndex={currentVideoIndex}
            changeVideo={changeVideo}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            isTabletPlaying={isTabletFourPlaying}
            setIsTabletPlaying={setIsTabletFourPlaying}
            currentVideoSrc={currentVideoSrc}
            tabletVideoWidth={tabletVideoWidth}
            tabletVideoHeight={tabletVideoHeight}
          />
          <ProjectFive projectFive="./images/project-five.webp" />
          <ProjectSix projectSix="./images/project-six.png" />
        </div>
        {isTablet ? (
          <></>
        ) : (
          <div className="image-wrapper">
            {isPlaying ? (
              <video
                controls
                width={videoWidth}
                height={videoHeight}
                style={{ display: isPlaying ? "block" : "none" }}
                onEnded={() => setIsPlaying(false)}
                src={currentVideoSrc}
                autoPlay
                muted
              />
            ) : (
              <div>
                {imageArray.map((_, index) => (
                  <img
                    className="project-image fade"
                    src={imageArray[index]}
                    alt={`A screenshot of my project ${index + 1}`}
                    style={{
                      display: currentImageIndex == index ? "block" : "none",
                    }}
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
