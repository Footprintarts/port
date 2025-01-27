import images from "../assets/images/images";
import time from "../helpers/time";

const About = () => (
  <div className="about-card bg-zinc-800 md:bg-transparent">
    <h2 className="card-titl title-medium grad-head">About</h2>
    <p className="body-medium card-text">
      Frontend reactjs developer, strong in tailwindcss,expressjs,ejs,threejs,
      reactNative, python scripting, arts and design, creative artist
      comfortable with adobe suite apps like illustrator, InDesign, photoshop,
      premiere pro,after effects and XD
    </p>
    <ul className="about-list">
      <li className="list-item">
        <span>
          <img src={images.location} alt="" className="" />
        </span>
        <span className="label-medium">
          Dar es Salaam, Tanzania – {time.currentTime} {time.pmAm} local time
        </span>
      </li>
      <li className="list-item">
        <span>
          <img src={images.work} alt="" className="" />
        </span>
        <span className="label-medium  text-lime-300">Open To Work</span>
      </li>
      <li className="list-item">
        <span>
          <img src={images.web} alt="" className="" />
        </span>
        <a href="https://example.com" className="label-medium">
          https://example.com
        </a>
      </li>
    </ul>
  </div>
);

export default About;
