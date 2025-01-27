import { useState } from "react";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const tabs = [
  {
    id: "1",
    label: "Projects",
    content: <Projects />,
  },
  {
    id: "2",
    label: "Resume",
    content: <Resume />,
  },
  {
    id: "3",
    label: "Contact",
    content: <Contact />,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabClick = (id) => {
    setActiveTab(id);

    // console.log(activeTab);
  };

  return (
    <div>
      <div className="flex bg-zinc-900 cursor-pointer border-b border-b-zinc-500">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`h-[48px] w-full grid content-center bg-zinc-900 ${
              activeTab === tab.id && "bg-lime-500 text-lime-500 "
            }  hover:bg-lime-500 hover:text-white duration-200 transition-all ease-out`}
            onClick={() => handleTabClick(tab.id)}
          >
            <span className="tab-text title-small">{tab.label}</span>
            <div className="state-layer"></div>
          </button>
        ))}
      </div>
      {tabs.map(({ id, content }) => (
        <div key={id} className="tab-conten">
          {activeTab === id && content}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
