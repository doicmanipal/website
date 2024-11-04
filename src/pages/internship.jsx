import InternshipAccordion from "../components/internshipAccordion.jsx";
import { PrismicProvider } from "@prismicio/react";
import { client } from "../utils/prismic.js";
import InternshipTabs from "../components/internship-tabs.jsx";

const Internship = () => {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <div className="min-h-screen">
        <div className="">
          <div className="mx-auto mb-6 mt-12 max-w-7xl">
            <hr className="w-10 mx-auto h-1 bg-primary" />
            <h1 className="text-5xl font-bold text-center flex justify-center mx-auto space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50px"
                width="50px"
                className="fill-primary px-1"
                viewBox="0 0 512 512"
              >
                <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
              </svg>
              <span>Internships</span>
            </h1>
          </div>
        </div>
        <div className="my-12 mx-auto">
          <PrismicProvider client={client}>
            <InternshipTabs/>
          </PrismicProvider>
        </div>
      </div>
    </div>
  );
};

export default Internship;
