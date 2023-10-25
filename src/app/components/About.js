"use client";

import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

import "./About.css";

// import profilePic from "../assets/profile-pic.webp";

function About() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  useEffect(() => {
    const getAbout = async () => {
      const response = await fetch("/about.json");
      const data = await response.json();
      setName(data.name);
      setJobTitle(data.jobTitle);
    };
    getAbout();
  }, []);

  return (
    <section className="about" id="about">
      <p className="self-introduction">Hi! My name is</p>
      {/* <img
        src={profilePic}
        alt="William's profile pic"
        className="profile-pic"
      /> */}
      <h1 className="my-name">{name}</h1>
      <h2 className="job-title">{jobTitle}</h2>
      <p className="self-introduction">
        Welcome to my portfolio! I'm specializing in React.js, Node.js, ASP.NET
        and Laravel, and fueled by a passion for turning imaginative ideas into
        user-friendly applications. My aim is to create engaging web experiences
        that are not only functional but also bring joy to users. I love working
        in collaborative environments, as it allows me to learn and grow in
        ideas.
      </p>
      <div className="skills">
        <img
          src="https://skillicons.dev/icons?i=js"
          data-tooltip-id="js-tooltip"
          data-tooltip-content="JavaScript"
          width="45"
          height="45"
        />
        <Tooltip id="js-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=ts"
          data-tooltip-id="ts-tooltip"
          data-tooltip-content="TypeScript"
          width="45"
          height="45"
        />
        <Tooltip id="ts-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=cs"
          data-tooltip-id="cs-tooltip"
          data-tooltip-content="C#"
          width="45"
          height="45"
        />
        <Tooltip id="cs-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=php"
          data-tooltip-id="php-tooltip"
          data-tooltip-content="PHP"
          width="45"
          height="45"
        />
        <Tooltip id="php-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=html"
          data-tooltip-id="html-tooltip"
          data-tooltip-content="HTML"
          width="45"
          height="45"
        />
        <Tooltip id="html-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=css"
          data-tooltip-id="css-tooltip"
          data-tooltip-content="CSS"
          width="45"
          height="45"
        />
        <Tooltip id="css-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=sass"
          data-tooltip-id="sass-tooltip"
          data-tooltip-content="SASS"
          width="45"
          height="45"
        />
        <Tooltip id="sass-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=react"
          data-tooltip-id="react-tooltip"
          data-tooltip-content="React.js"
          width="45"
          height="45"
        />

        <Tooltip id="react-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=redux"
          data-tooltip-id="redux-tooltip"
          data-tooltip-content="Redux"
          width="45"
          height="45"
        />
        <Tooltip id="redux-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=tailwind"
          data-tooltip-id="tailwind-tooltip"
          data-tooltip-content="Tailwind CSS"
          width="45"
          height="45"
        />
        <Tooltip id="tailwind-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=materialui"
          data-tooltip-id="materialui-tooltip"
          data-tooltip-content="Material UI"
          width="45"
          height="45"
        />
        <Tooltip id="materialui-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=webpack"
          data-tooltip-id="webpack-tooltip"
          data-tooltip-content="Webpack"
          width="45"
          height="45"
        />
        <Tooltip id="webpack-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=bootstrap"
          data-tooltip-id="bootstrap-tooltip"
          data-tooltip-content="Bootstrap"
          width="45"
          height="45"
        />
        <Tooltip id="bootstrap-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=jquery"
          data-tooltip-id="jquery-tooltip"
          data-tooltip-content="jQuery"
          width="45"
          height="45"
        />
        <Tooltip id="jquery-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=styledcomponents"
          data-tooltip-id="styledcomponents-tooltip"
          data-tooltip-content="styled-components"
          width="45"
          height="45"
        />
        <Tooltip id="styledcomponents-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=github"
          data-tooltip-id="github-tooltip"
          data-tooltip-content="Github"
          width="45"
          height="45"
        />
        <Tooltip id="github-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=vercel"
          data-tooltip-id="vercel-tooltip"
          data-tooltip-content="Vercel"
          width="45"
          height="45"
        />
        <Tooltip id="vercel-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=figma"
          data-tooltip-id="figma-tooltip"
          data-tooltip-content="Figma"
          width="45"
          height="45"
        />
        <Tooltip id="figma-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=wordpress"
          data-tooltip-id="wordpress-tooltip"
          data-tooltip-content="Wordpress"
          width="45"
          height="45"
        />
        <Tooltip id="wordpress-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=nodejs"
          data-tooltip-id="nodejs-tooltip"
          data-tooltip-content="Node.js"
          width="45"
          height="45"
        />

        <Tooltip id="nodejs-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=express"
          data-tooltip-id="express-tooltip"
          data-tooltip-content="Express.js"
          width="45"
          height="45"
        />
        <Tooltip id="express-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=mongodb"
          data-tooltip-id="mongodb-tooltip"
          data-tooltip-content="MongoDB"
          width="45"
          height="45"
        />
        <Tooltip id="mongodb-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=dotnet"
          data-tooltip-id="dotnet-tooltip"
          data-tooltip-content=".NET"
          width="45"
          height="45"
        />
        <Tooltip id="dotnet-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=laravel"
          data-tooltip-id="laravel-tooltip"
          data-tooltip-content="Laravel"
          width="45"
          height="45"
        />
        <Tooltip id="laravel-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=mysql"
          data-tooltip-id="mysql-tooltip"
          data-tooltip-content="MySQL"
          width="45"
          height="45"
        />
        <Tooltip id="mysql-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=firebase"
          data-tooltip-id="firebase-tooltip"
          data-tooltip-content="Firebase"
          width="45"
          height="45"
        />
        <Tooltip id="firebase-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=postman"
          data-tooltip-id="postman-tooltip"
          data-tooltip-content="Postman"
          width="45"
          height="45"
        />
        <Tooltip id="postman-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=aws"
          data-tooltip-id="aws-tooltip"
          data-tooltip-content="Amazon Web Services"
          width="45"
          height="45"
        />
        <Tooltip id="aws-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=azure"
          data-tooltip-id="azure-tooltip"
          data-tooltip-content="Azure"
          width="45"
          height="45"
        />
        <Tooltip id="azure-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=docker"
          data-tooltip-id="docker-tooltip"
          data-tooltip-content="Docker"
          width="45"
          height="45"
        />
        <Tooltip id="docker-tooltip" />
      </div>
      <div className="icon-wrapper">
        <a href="https://www.linkedin.com/in/williamphk/" target="_blank">
          LinkedIn
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/williamphk" target="_blank">
          Github
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a href="mailto:willphk@outlook.com" target="_blank">
          Email
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
      <a href="#work" className="about-section-button">
        Check out my works!
        <div className="button__shadow"></div>
      </a>
      <a
        id="scroll-btn"
        href="#work"
        aria-hidden="true"
        aria-label="View my projects"
      ></a>
    </section>
  );
}

export default About;
