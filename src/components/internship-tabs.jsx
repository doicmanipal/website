import { useState } from "react";
import InternshipAccordion from "./internshipAccordion";

const openCloseTabs = [
  "Open",
  "Closed"
];

const InternshipTabs = () => {
  const [activeTab, setActiveTab] = useState("Open");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-full my-10 ">
      <div className="flex overflow-x-scroll md:shadow-none">
        {openCloseTabs.map((tab, idx) => (
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
        <InternshipAccordion activeTab={activeTab} />
      </div>
    </div>
  );
};

export default InternshipTabs;
