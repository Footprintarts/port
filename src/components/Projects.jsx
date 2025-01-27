// import ProjectCard from "./ProjectCard";
import ProjectCard from "./ProjectCardPro";
import images from "../assets/images/images";

const Projects = () => {
  const projectList = [
    {
      image: images.Project1,
      title: "Pixstock - Stock Media App",
      type: "Web App",
      cover1: "/covers/cover1.gif",
      link: "https://aboonefinance.pages.dev/",
    },
    {
      image: images.Project2,
      title: "Cook.io - Recipe App",
      type: "Web App",
      cover1: "/covers/cover2.gif",
      link: "https://orangeweb.pages.dev/",
    },
    {
      image: images.Project3,
      title: "GitFinder - Github User Finder",
      type: "Web App",
      cover1: "/covers/cover3.gif",
      link: "https://digitaldesigner.pages.dev/",
    },
    {
      image: images.Project4,
      title: "Weatherio - Live Weather App",
      type: "Web App",
      cover1: "/covers/cover4.gif",
      link: "https://bonapex-website.pages.dev/",
    },
    {
      image: images.Project5,
      title: "Tvflix - Netflix Clone 2.0",
      type: "Web App",
      cover1: "/covers/cover5.gif",
      link: "https://bondoru.pages.dev/",
    },
    {
      image: images.Project6,
      title: "Travelia - Travel Website",
      type: "Website",
      cover1: "/covers/cover6.gif",
      link: "https://docs-clone.pages.dev",
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
