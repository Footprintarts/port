/* eslint-disable react/prop-types */

const SkillsItem = ({ icon, label }) => (
  <li className="resume-bottom-item">
    <img
      src={icon}
      width="28"
      height="28"
      loading="lazy"
      alt="HTML5"
      className="icon"
    />
    <span className="label-medium">{label}</span>
  </li>
);

export default SkillsItem;
