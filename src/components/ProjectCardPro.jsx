/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ProjectCard = ({ project }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a href="/test-link">
      <div
        className="z-[999] card w-fit rounded-md hover:shadow-2xl hover:shadow-lime-500 duration-300 cursor-pointer transition-all p-4 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main card content */}
        <figure className="rounded-lg img-holder w-[334px] h-[250px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="z-10 img-cover w-full h-full object-cover"
          />
        </figure>

        <div className="card-content mt-4">
          <span className="label-large card-subtitle text-sm text-zinc-500">
            {project.type}
          </span>

          <h3 className="title-large card-title text-xl font-bold">
            {project.title}
          </h3>
        </div>

        <a href="#" className="state-layer absolute inset-0"></a>

        {/* Hover Image */}
        {isHovered && (
          <div
            className="fixed top-0 left-0 pointer-events-none z-[999] transition-opacity duration-300 flex ease-out"
            style={{
              transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
          >
            <img
              src={project.cover1}
              alt={project.title}
              className="z-[999] w-40 h-40 lg:w-[320px] lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
