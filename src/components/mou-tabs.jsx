import { useState } from "react";
import MouAccordian from "./mouAccordian";

const continentTabs = [
  "All",
  "Africa",
  "Asia",
  "Australia",
  "Europe",
  "North America",
  "South America",
];

const MouTabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-full my-10 ">
      <div className="flex overflow-x-scroll md:shadow-none">
        {continentTabs.map((tab, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 text-lg font-medium w-full text-nowrap focus:outline-none ${
              activeTab === tab
                ? "border-b-2 border-primary text-primary"
                : "text-neutral"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <MouAccordian activeTab={activeTab} />
      </div>
    </div>
  );
};

export default MouTabs;
