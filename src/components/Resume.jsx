import ResumeItem from "./ResumeItem";
import SkillsItem from "./SkillsItem";

// data
import { ExperienceText, EducationText, SkillsText } from "../assets/data";

const Resume = () => (
  <section className="section tab-conten resume-tab" data-tab-content="resume">
    <div className="container">
      <h2 className="section-title title-small grad-head">Experience</h2>
      <ul className="list">
        {ExperienceText.map(({ id, title, years }) => (
          <ResumeItem key={id} title={title} years={years} />
        ))}
      </ul>
      <h2 className="section-title title-small grad-head">Education</h2>
      <ul className="list">
        {EducationText.map(({ id, title, years }) => (
          <ResumeItem key={id} title={title} years={years} />
        ))}
      </ul>
      <h2 className="section-title title-small grad-head">
        Skills and Technologies
      </h2>
      <ul className="resume-bottom-list">
        {SkillsText.map(({ id, icon, label }) => (
          <SkillsItem key={id} icon={icon} label={label} />
        ))}
      </ul>
    </div>
  </section>
);

export default Resume;
