import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";

const InternshipAccordion = () => {
  const [internships, { state, error }] =
    useAllPrismicDocumentsByType("internships");

  if (state === "loading") {
    return (
      <span className="loading mx-auto flex loading-ring loading-lg"></span>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!internships || internships.length === 0) {
    return <div className="hidden">No internships found.</div>;
  }
  return (
    <div className="space-y-2">
      {internships.map((internship) => (
        <div key={internship.id}>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="accordian" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                <PrismicRichText
                  field={internship.data.name}
                  components={{
                    heading1: ({ children }) => <h2>{children}</h2>,
                  }}
                />
              </div>
              <div className="collapse-content space-y-2">
                <p>
                  <span className="font-bold">Description: </span>
                  {internship.data.description}
                </p>
                <p>
                  <span className="font-bold">Deadline:</span>{" "}
                  {internship.data.deadline}
                </p>
                <button className="btn btn-primary text-white my-4">
                  <a href={internship.data.link}>Know more</a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="15"
                    fill="white"
                  >
                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InternshipAccordion;
