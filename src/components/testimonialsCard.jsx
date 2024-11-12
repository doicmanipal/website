import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";
import { useEffect } from "react";

const TestimonialsCard = () => {
  const [testimonials] = useAllPrismicDocumentsByType("testimonials");

  useEffect(() => {
    console.log(testimonials);
  }, [testimonials]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials?.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full">
              {/* <FontAwesomeIcon
                icon={faStar}
                className="text-primary/10 w-8 h-8 absolute top-4 right-4"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="fill-primary w-8 h-8 absolute top-4 right-4"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </div>

            {/* Content container */}
            <div className="relative p-6">
              {/* Profile section */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transform -translate-y-1" />
                  <img
                    src={testimonial.data.profile_pic.url}
                    alt={testimonial.data.Name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md relative"
                  />
                </div>
              </div>

              {/* Quote section */}
              <div className="relative mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-6 h-6 -left-2 -top-2 fill-primary"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z" />
                </svg>
                <div className="pt-2 px-2">
                  <p className="text-gray-700 text-lg leading-relaxed text-center text-balance">
                    {testimonial.data.testimonial}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute fill-primary w-6 h-6 -right-2 -bottom-2"
                  viewBox="0 0 448 512"
                >
                  <path d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z" />
                </svg>
              </div>

              {/* Author details */}
              <div className="text-center border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">
                  <PrismicRichText
                    field={testimonial.data.name}
                    components={{
                      heading1: ({ children }) => (
                        <h3 className="text-xl font-bold text-primary">
                          {children}
                        </h3>
                      ),
                    }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {testimonial.data.branch_course_affliation}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {testimonial.data.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCard;
