import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";

const OtherScholarships = () => {
  const [others, { state, error }] =
    useAllPrismicDocumentsByType("other-scholarships");

  if (state === "loading") {
    return (
      <span className="loading mx-auto flex loading-ring loading-lg"></span>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!others || others.length === 0) {
    return <div className="hidden">No scholarships found.</div>;
  }
  return (
    <>
      {others.map((other) => (
        <div className="collapse collapse-arrow bg-base-200" key={other.id}>
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            <PrismicRichText
              field={other.data.name}
              components={{
                heading1: ({ children }) => <h2 className="">{children}</h2>,
              }}
            />{" "}
          </div>
          <div className="collapse-content space-y-2">
            <div>
              <p>
                <span className="font-bold">Country: </span>
                {other.data.country}
              </p>
              <p>
                <p>
                  <span className="font-bold">Degree: </span>
                  {other.data.degree}
                </p>
                <span className="font-bold">Program: </span>
                {other.data.program}
              </p>
              <p>
                <span className="font-bold text-clip text-nowrap ">Date: </span>
                {other.data.date}
              </p>
            </div>
            <div>
              {" "}
              <button className="btn btn-primary">
                <a href={other.data.link}>Link</a>
              </button>{" "}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OtherScholarships;
