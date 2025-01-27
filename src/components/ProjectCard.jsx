/* eslint-disable react/prop-types */

const ProjectCard = ({ project }) => {
  return (
    <div className="card w-fit rounded-md hover:shadow-2xl hover:shadow-lime-500 duration-300 cursor-pointer transition-all p-4">
      <figure className="rounded-lg img-holder w-[334px] h-[250px] ">
        <img
          src={project.image}
          alt="Pixstock - Stock Media App"
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
};

export default ProjectCard;
