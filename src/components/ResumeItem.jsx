/* eslint-disable react/prop-types */
const ResumeItem = ({ title, years }) => (
  <li className="resume-item">
    <div className="resume-card">
      <p className="body-large font-semibold">{title}</p>
      <span className="label-medium card-subtitle text-zinc-300/80">
        {years}
      </span>
    </div>
  </li>
);

export default ResumeItem;
