import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { useEffect } from "react";

const FaqAccordion = () => {
  // Fetch FAQ documents from Prismic
  const [faqs] = useAllPrismicDocumentsByType("faq"); // Make sure your Prismic type is "faq"

  useEffect(() => {
    console.log(faqs);
  }, [faqs]);

  return (
    <div className="space-y-4">
      {faqs?.map((faq, index) => (
        <div key={index} className="collapse collapse-arrow bg-base-200">
          {/* Accordion control input */}
          <input type="radio" name="faq-accordion" id={`faq-${index}`} />
          {/* Question */}
          <div className="collapse-title text-xl font-medium">
            <h3>{faq.data.question}</h3>
          </div>
          {/* Answer */}
          <div className="collapse-content">
            <p>{faq.data.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
