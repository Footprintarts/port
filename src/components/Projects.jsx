// import ProjectCard from "./ProjectCard";
import ProjectCard from "./ProjectCardPro";
import images from "../assets/images/images";

const Projects = () => {
  const projectList = [
    {
      image: images.Project1,
      title: "AboonFinance - Finance Website",
      type: "Web Page",
      cover1: "/covers/cover1.gif",
      link: "https://aboonefinance.pages.dev/",
    },
    {
      image: images.Project2,
      title: "Orange - Creative Team Page",
      type: "Web Page",
      cover1: "/covers/cover2.gif",
      link: "https://orangeweb.pages.dev/",
    },
    {
      image: images.Project3,
      title: "DigitalDesigner - Portfolio Page",
      type: "Web Page",
      cover1: "/covers/cover3.gif",
      link: "https://digitaldesigner.pages.dev/",
    },
    {
      image: images.Project4,
      title: "NexGen - Tech Company Website",
      type: "Full Web Site",
      cover1: "/covers/cover4.gif",
      link: "https://bonapex-website.pages.dev/",
    },
    {
      image: images.Project5,
      title: "BondoRu - Realestate Website",
      type: "Web Page",
      cover1: "/covers/cover5.gif",
      link: "https://bondoru.pages.dev/",
    },
    {
      image: images.Project6,
      title: "DOCS 15 - Documentation Website",
      type: "Web Page",
      cover1: "/covers/cover6.gif",
      link: "https://docs-clone.pages.dev",
    },
    {
      image: images.Project7,
      title: "INSAGRAM - Website Clone",
      type: "Web Page",
      cover1: "/covers/cover7.png",
      link: "https://instagram-clone-2-0.pages.dev/",
    },
    {
      image: images.Project8,
      title: "THREEJS FPS - Game Template(Open Source)",
      type: "Web Experience",
      cover1: "/covers/cover8.png",
      link: "https://threejs-fps-2-0.pages.dev/",
    },
  ];

  return (
    <section className="section tab-content active" data-tab-content="project">
      <div className="container">
        <div className="project-list ml-4 md:ml-24 lg:ml-0">
          {projectList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
