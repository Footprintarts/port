```jsx
import React from "react";
import ReactDOM from "react-dom";
import { ThemeToggle, Tabs } from "./js/script";
import "./css/style.css";
```

## HERO

```jsx
const Hero = () => (
  <section className="section hero">
    <div className="container">
      <figure
        className="hero-banner img-holder"
        style={{ "--width": 240, "--height": 240 }}
      >
        <img
          src="./assets/images/profile.png"
          alt="Ahmed Khalid"
          width="240"
          height="240"
          className="img-cover"
        />
      </figure>
      <div className="hero-content">
        <span className="label-large section-subtitle">Software Engineer</span>
        <h1 className="display-small">Ahmed Khalid</h1>
        <p className="body-large section-text">
          Lorem ipsum dolor sit amet consectetur. Quam ut feugiat ut porta morbi
          lobortis tristique.
        </p>
        <div className="btn-wrapper">
          <a href="mailto:khalid@techgulf1.com" className="chip">
            <span className="material-symbols-outlined" aria-hidden="true">
              mail
            </span>
            <span className="label-large">khalid@techgulf1.com</span>
            <div className="state-layer"></div>
          </a>
          <a href="tel:+213908539206" className="chip">
            <span className="material-symbols-outlined" aria-hidden="true">
              call
            </span>
            <span className="label-large">+213908539206</span>
            <div className="state-layer"></div>
          </a>
        </div>
      </div>
    </div>
  </section>
);
```

## TABS - JS -LOGIC

```jsx
import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );

  useEffect(() => {
    const theme =
      sessionStorage.getItem("theme") || (isDark ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    sessionStorage.setItem("theme", theme);
  }, [isDark]);

  const changeTheme = () => {
    const newTheme =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = newTheme;
    sessionStorage.setItem("theme", newTheme);
    setIsDark(newTheme === "dark");
  };

  return (
    <button
      className="icon-btn theme-btn"
      onClick={changeTheme}
      aria-hidden="true"
    >
      <span className="material-symbols-outlined dark" aria-hidden="true">
        dark_mode
      </span>
      <span className="material-symbols-outlined light" aria-hidden="true">
        light_mode
      </span>
      <div className="state-layer"></div>
    </button>
  );
};

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].content);
  const [activeTabBtn, setActiveTabBtn] = useState(tabs[0].label);

  const handleTabClick = (content, label) => {
    setActiveTab(content);
    setActiveTabBtn(label);
  };

  return (
    <div>
      <div className="primary-tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTabBtn === tab.label ? "active" : ""}`}
            onClick={() => handleTabClick(tab.content, tab.label)}
          >
            <span className="tab-text title-small">{tab.label}</span>
            <div className="state-layer"></div>
          </button>
        ))}
      </div>
      <div className="tab-content">{activeTab}</div>
    </div>
  );
};

export { ThemeToggle, Tabs };
```

## ABOUT

```jsx
const AboutCard = () => (
  <div className="about-card">
    <h2 className="card-title title-medium">About</h2>
    <p className="body-medium card-text">
      A passionate software engineer with a strong background in Computer
      Science.
    </p>
    <ul className="about-list">
      <li className="list-item">
        <span className="material-symbols-outlined" aria-hidden="true">
          location_on
        </span>
        <span className="label-medium">Cairo, Egypt</span>
      </li>
      <li className="list-item">
        <span className="material-symbols-outlined" aria-hidden="true">
          work
        </span>
        <span className="label-medium">TechGulf Solutions</span>
      </li>
      <li className="list-item">
        <span className="material-symbols-outlined" aria-hidden="true">
          captive_portal
        </span>
        <a href="https://example.com" className="label-medium">
          https://example.com
        </a>
      </li>
    </ul>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="card">
    <figure
      className="card-banner img-holder"
      style={{ "--width": 344, "--height": 180 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="img-cover"
        width="344"
        height="180"
      />
    </figure>
    <div className="card-content">
      <span className="label-large card-subtitle">{project.type}</span>
      <h3 className="title-large card-title">{project.title}</h3>
    </div>
    <a href="#" className="state-layer"></a>
  </div>
);
```

## PROJECTS

```jsx
const Projects = () => {
  const projectList = [
    {
      image: "./assets/images/project-1.png",
      title: "Pixstock - Stock Media App",
      type: "Web App",
    },
    {
      image: "./assets/images/project-2.png",
      title: "Cook.io - Recipe App",
      type: "Web App",
    },
    {
      image: "./assets/images/project-3.png",
      title: "GitFinder - Github User Finder",
      type: "Web App",
    },
    {
      image: "./assets/images/project-4.png",
      title: "Weatherio - Live Weather App",
      type: "Web App",
    },
    {
      image: "./assets/images/project-5.png",
      title: "Tvflix - Netflix Clone 2.0",
      type: "Web App",
    },
    {
      image: "./assets/images/project-6.png",
      title: "Travelia - Travel Website",
      type: "Website",
    },
  ];

  return (
    <section className="section tab-content active" data-tab-content="project">
      <div className="container">
        <div className="project-list">
          {projectList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
```

## RESUME

```jsx
const Resume = () => (
  <section className="section tab-content resume-tab" data-tab-content="resume">
    <div className="container">
      <h2 className="section-title title-small">Experience</h2>
      <ul className="list">
        <li className="resume-item">
          <div className="resume-card">
            <p className="body-large">Software Engineer, TechGulf Solutions</p>
            <span className="label-medium card-subtitle">2018 - Present</span>
            <span className="body-medium card-text">
              Led the development of a customer management system, resulting in
              improved efficiency and streamlined processes.
            </span>
          </div>
        </li>
        <li className="resume-item">
          <div className="resume-card">
            <p className="body-large">
              Software Developer Intern, ByteOasis Corporation
            </p>
            <span className="label-medium card-subtitle">2016 - 2017</span>
            <span className="body-medium card-text">
              Assisted in the development and testing of a mobile application
              for internal use.
            </span>
          </div>
        </li>
      </ul>
      <h2 className="section-title title-small">Education</h2>
      <ul className="list">
        <li className="resume-item">
          <div className="resume-card">
            <p className="body-large">
              Certification in Web Development with React.js (FreeCodeCamp
              Certification)
            </p>
            <span className="label-medium card-subtitle">2015 - 2016</span>
          </div>
        </li>
        <li className="resume-item">
          <div className="resume-card">
            <p className="body-large">
              Relevant Coursework: Data Structures, Algorithms, Database
              Management
            </p>
            <span className="label-medium card-subtitle">2014 - 2013</span>
          </div>
        </li>
        <li className="resume-item">
          <div className="resume-card">
            <p className="body-large">
              Bachelor of Science in Computer Science, Alexandria University
            </p>
            <span className="label-medium card-subtitle">2010 - 2014</span>
          </div>
        </li>
      </ul>
      <h2 className="section-title title-small">Skills and Technologies</h2>
      <ul className="resume-bottom-list">
        <li className="resume-bottom-item">
          <img
            src="./assets/images/html5.svg"
            width="28"
            height="28"
            loading="lazy"
            alt="HTML5"
            className="icon"
          />
          <span className="label-medium">HTML5</span>
        </li>
        <li className="resume-bottom-item">
          <img
            src="./assets/images/css3.svg"
            width="28"
            height="28"
            loading="lazy"
            alt="CSS3"
            className="icon"
          />
          <span className="label-medium">CSS3</span>
        </li>
        <li className="resume-bottom-item">
          <img
            src="./assets/images/javascript.svg"
            width="28"
            height="28"
            loading="lazy"
            alt="JavaScript"
            className="icon"
          />
          <span className="label-medium">JavaScript</span>
        </li>
        <li className="resume-bottom-item">
          <img
            src="./assets/images/react.js.svg"
            width="28"
            height="28"
            loading="lazy"
            alt="React.js"
            className="icon"
          />
          <span className="label-medium">React.js</span>
        </li>
        <li className="resume-bottom-item">
          <img
            src="./assets/images/node.js.svg"
            width="28"
            height="28"
            loading="lazy"
            alt="Node.js"
            className="icon"
          />
          <span className="label-medium">Node.js</span>
        </li>
        <li className="resume-bottom-item">
          <img
            src="./assets/images/github.svg"
            width="28"
            height="28"
            loading="lazy"
            alt="GitHub"
            className="icon"
          />
          <span className="label-medium">GitHub</span>
        </li>
        <li className="resume-bottom-item">
          <img
            src="./assets/images/mongoDB.svg"
            width="28"
            height="28"
            loading="lazy"
            alt="MongoDB"
            className="icon"
          />
          <span className="label-medium">MongoDB</span>
        </li>
        <li className="resume-bottom-item">
          <img
            src="./assets/images/VS_code.svg"
            width="28"
            height="28"
            loading="lazy"
            alt="VS Code"
            className="icon"
          />
          <span className="label-medium">VS Code</span>
        </li>
      </ul>
    </div>
  </section>
);
```

## CONTACT

```jsx
const Contact = () => (
  <section class="section tab-content contact-tab" data-tab-content="contact">
    <div class="container">
      <div class="contact-info">
        <h4 class="section-title title-small">Contact Info</h4>

        <ul class="contact-info-list">
          <li class="contact-info-item">
            <div class="icon-box">
              <span class="material-symbols-outlined" aria-hidden="true">
                mail
              </span>
            </div>

            <div class="info-content">
              <p class="label-small info-title">Mail Us</p>

              <a href="mailto:khalid@techgulf1.com" class="label-small">
                khalid@techgulf1.com
              </a>

              <a href="mailto:khalid@service.com" class="label-small">
                khalid@service.com
              </a>
            </div>
          </li>

          <li class="contact-info-item">
            <div class="icon-box">
              <span class="material-symbols-outlined" aria-hidden="true">
                call
              </span>
            </div>

            <div class="info-content">
              <p class="label-small info-title">Contact Us</p>

              <a href="tel:+2382395632498" class="label-small">
                +2382395632498
              </a>

              <a href="tel:+2323982609238" class="label-small">
                +2323982609238
              </a>
            </div>
          </li>

          <li class="contact-info-item">
            <div class="icon-box">
              <span class="material-symbols-outlined" aria-hidden="true">
                location_on
              </span>
            </div>

            <div class="info-content">
              <p class="label-small info-title">Address</p>

              <a href="#" class="label-small">
                Al Azbakeya, Cairo Governorate 4320001, Egypt
              </a>
            </div>
          </li>
        </ul>

        <h4 class="title-small">Social Info</h4>

        <div class="social-list">
          <a href="#" class="social-item">
            Twitter
          </a>

          <a href="#" class="social-item">
            GitHub
          </a>

          <a href="#" class="social-item">
            Instagram
          </a>
        </div>
      </div>

      <form action="" method="post" class="contact-form">
        <h3 class="title-large">Let’s Work Together.</h3>

        <div class="input-wrapper">
          <input
            type="text"
            name="name"
            class="input-field"
            placeholder="Name*"
            required
          />

          <input
            type="email"
            name="email"
            class="input-field"
            placeholder="Email*"
            required
          />

          <input
            type="text"
            name="subject"
            class="input-field"
            placeholder="Subject"
          />

          <textarea
            name="message"
            placeholder="Message*"
            class="textarea"
            required
          ></textarea>

          <button class="btn" type="submit">
            <span class="label-large">Send Message</span>

            <div class="state-layer"></div>
          </button>
        </div>
      </form>
    </div>
  </section>
);
```

## FOOTER

```jsx
const Footer = () => (
  <div class="footer footer">
    <div class="container">
      <p class="body-medium">
        Copyright 2024. All right reserved by footprintarts
      </p>
    </div>
  </div>
);
```
