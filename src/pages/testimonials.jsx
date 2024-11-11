import { PrismicProvider } from "@prismicio/react";
import { client } from "../utils/prismic.js";
import TestimonialsCard from "../components/testimonialsCard.jsx";

const Testimonials = () => {
  return (
    <>
      <div className="mx-auto mt-12  max-w-7xl px-2">
        <hr className="w-8 mx-auto h-1 bg-primary" />
        <h1 className="text-5xl font-bold text-center flex justify-center mx-auto gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            height="50px"
            width="50px"
            className="fill-primary px-1"
          >
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          <span>Testimonials</span>
        </h1>
        <div className="mt-8">
          <PrismicProvider client={client}>
            <TestimonialsCard/>
          </PrismicProvider>
        </div>
      </div>
    </>
  );
};

export default Testimonials