import { PrismicProvider } from "@prismicio/react";
import { client } from "../utils/prismic.js";
import FaqAccordian from "../components/faqAccordian.jsx";

const Faq = () => {
  return (
    <div>
      <>
        <div className="mx-auto mt-12  max-w-7xl px-2">
          <hr className="w-8 mx-auto h-1 bg-primary" />
          <h1 className="text-5xl font-bold text-center flex justify-center mx-auto gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="50px"
              width="50px"
              className="fill-primary px-1"
            >
              <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
            </svg>
            <span>FAQs</span>
          </h1>
          <div className="mt-8">
            <PrismicProvider client={client}>
              <FaqAccordian />
            </PrismicProvider>
          </div>
        </div>
      </>
    </div>
  );
};

export default Faq;
