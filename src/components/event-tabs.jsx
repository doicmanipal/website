import { useState } from "react";
import EventCard from "../components/eventCard.jsx";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Open");

  return (
    <div className="w-full max-w-full mt-10">
      <div className="grid grid-cols-2">
        <button
          className={`px-4 py-2 text-lg font-medium focus:outline-none ${
            activeTab === "Open"
              ? "border-b-2 border-primary text-primary"
              : "text-neutral"
          }`}
          onClick={() => setActiveTab("Open")}
        >
          Open
        </button>
        <button
          className={`px-4 py-2 text-lg font-medium focus:outline-none ${
            activeTab === "Close"
              ? "border-b-2 border-primary text-primary"
              : "text-neutral"
          }`}
          onClick={() => setActiveTab("Close")}
        >
          Closed
        </button>
      </div>

      <div className="mt-4 space-y-4">
        <EventCard activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Tabs;
