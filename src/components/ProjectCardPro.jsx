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
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <div
        className="card w-fit rounded-md hover:shadow-2xl hover:shadow-lime-500 duration-300 cursor-pointer transition-all p-4 relative z-[1]" // Ensure card has lower z-index than hover image
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main card content */}
        <figure className="img-holder w-[334px] h-[250px] overflow-hidden rounded-lg relative">
          <img
            src={project.image}
            alt={project.title}
            className="img-cover w-full h-full object-cover z-[1]"
          />
        </figure>

        <div className="card-content mt-4">
          <span className="card-subtitle text-sm text-zinc-500">
            {project.type}
          </span>

          <h3 className="card-title text-xl font-bold">{project.title}</h3>
        </div>

        {/* Hover Image */}
        {isHovered && (
          <div
            className="fixed top-0 left-0 pointer-events-none z-[9999]" // Ensure hover image is on top of everything
            style={{
              transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
          >
            <img
              src={project.cover1}
              alt={project.title}
              className="w-40 h-40 lg:w-[320px] lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
