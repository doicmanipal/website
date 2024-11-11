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
    <div className="flex flex-wrap gap-6 justify-center">
      {testimonials?.map((testimonial, index) => (
        <div
          key={index}
          className="card w-96 bg-base-100 shadow-md p-6 border rounded-lg"
        >
          <div className="flex justify-center mb-4">
            <img
              src={testimonial.data.profile_pic.url}
              alt={testimonial.data.Name}
              className="w-24 h-24 rounded-full"
            />
          </div>
          <div className="text-center flex justify-center text-xl gap-x-1">
            <p className="text-primary text-4xl font-bold">&ldquo; </p>
            <p className="italic text-gray-600 mb-4">
              {testimonial.data.testimonial}
            </p>
            <p className="text-primary text-4xl font-bold"> &ldquo;</p>
          </div>
          <div className="text-center">
            <PrismicRichText
              field={testimonial.data.name}
              components={{
                heading1: ({ children }) => <h3>{children}</h3>,
              }}
            />
            <p className="text-sm text-gray-500">
              {testimonial.data.branch_course_affliation}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              {testimonial.data.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsCard;
