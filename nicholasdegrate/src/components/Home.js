import React, { Fragment } from "react";

import Header from "./Header";

import nature from "../img/nature.jpg";
import { HomeForm } from "./Form";

export const Home = () => {
  return (
    <Fragment>
      <section id="main-wrapper">
        <Header />
        <section id="home-header">
          <div className="header-content">
            <h1>Nicholas Degrate</h1>
            <p>
              I'm a Full-Stack Developer that specialized in React.js and
              Node.js
            </p>
          </div>
          <div className="header-img">
            <img src={nature} alt="nature" />
          </div>
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <section id="box-container">
            <div className="box box1">
              <div className="box-top">
                <h3>Legacy Rebuild Properties</h3>
                <h4>Real Estate Company</h4>
                <p>
                  Created a landing page website to generate more clientele and
                  leads for the company using Reactjs.
                </p>
              </div>
              <div className="box-bottom">
                <ul>
                  <li>Reactjs</li>
                  <li>Sass</li>
                </ul>
                <button>
                  <a
                    href="http://www.legacyrebuildproperties.com"
                    target="_blank"
                  >
                    VIEW
                  </a>
                </button>
              </div>
            </div>
            <div className="box box2">
              <div className="box-top">
                <h3>Quality Acquisitions</h3>
                <h4>Real Estate Company</h4>
                <p>
                  Created a website to generate leads and post blogs to improve
                  SEO and drive traffic to the website.
                </p>
              </div>
              <div className="box-bottom">
                <ul>
                  <li>Reactjs</li>
                  <li>google analytics</li>
                  <li>gsap</li>
                </ul>
                <button>
                  <a href="http://www.qualityacq.com" target="_blank">
                    VIEW
                  </a>
                </button>
              </div>
            </div>
          </section>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            <ul>
              <h3>Front-End</h3>
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>Javascript</li>
              <li>React.js</li>
              <li>Pug</li>
              <li>EJS</li>
            </ul>
            <ul>
              <h3>Back-End</h3>
              <li>Python</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
            <ul>
              <h3>Tools</h3>
              <li>Git</li>
              <li>github</li>
              <li>Command Line</li>
              <li>Nignx</li>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Google analytics</li>
              <li>SEO</li>
              <li>Chakra-ui</li>
              <li>bootstrap</li>
            </ul>
          </div>
        </section>
        <section id="about-me">
          <h2>About Me</h2>
          <p>
            I have 5 years of experience in Computer software and
            Troubleshooting technical issues and 2 years in computer programming
            languages like Javascript and Python, in addition to 2 years in
            computer programs such as CSS, HTML, and SASS.
          </p>
        </section>
        <section id="contact">
          <HomeForm />
        </section>
        <footer>
          <h3>Thank you for coming!</h3>
        </footer>
      </section>
    </Fragment>
  );
};
