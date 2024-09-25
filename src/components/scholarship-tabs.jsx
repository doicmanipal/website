import { useState } from 'react';
import OtherScholarships from "./scholarships/otherScholarships.jsx";
import PartnerScholarships from "./scholarships/partnerScholarships.jsx";
import {client} from "../utils/prismic.js";
import {PrismicProvider} from "@prismicio/react";
// import ScholarshipAccordian from './scholarships/scholershipAccordian.jsx';

const ScholarshipTabs = () => {
  const [activeTab, setActiveTab] = useState('partnered');

  return (
    <div className="w-full max-w-full mt-10">
      <div className="grid grid-cols-2">
        <button
          className={`px-4 py-2 text-lg font-medium focus:outline-none ${
            activeTab === "partnered"
              ? "border-b-2 border-primary text-primary"
              : "text-neutral"
          }`}
          onClick={() => setActiveTab("partnered")}
        >
          Partnered
        </button>
        <button
          className={`px-4 py-2 text-lg font-medium focus:outline-none ${
            activeTab === "other"
              ? "border-b-2 border-primary text-primary"
              : "text-neutral"
          }`}
          onClick={() => setActiveTab("other")}
        >
          Other
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'other' && (
                <div className='w-full  flex flex-wrap gap-4 px-2 '>
                    <PrismicProvider client={client}>
                        <OtherScholarships/>
                    </PrismicProvider>
                </div>
            )}

            {activeTab === 'partnered' && (
                <div className=' w-full  flex flex-wrap gap-4 px-2   '>
                    <PrismicProvider client={client}><
                        PartnerScholarships/>
                    </PrismicProvider>
                </div>
            )}
        {/* <ScholarshipAccordian/> */}
      </div>
    </div>
  );
};

export default ScholarshipTabs;
