import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";

const OtherScholarships = () => {
  const [other, { state, error }] =
    useAllPrismicDocumentsByType("other-scholarships");

  if (state === "loading") {
    return (
      <span className="loading mx-auto flex loading-ring loading-lg"></span>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!other || other.length === 0) {
    return <div className="hidden">No scholarships found.</div>;
  }
  return (
    <>
      {other.map((others) => (
        <div
          className="card bg-neutral min-h-[22.5rem] text-white w-full mx-auto hover:-translate-y-3 md:w-[45%] xl:w-[30%] translate-y-0  duration-300"
          key={others.id}
        >
          <div className="card-body text-wrap ">
            <PrismicRichText
              field={others.data.name}
              components={{
                heading1: ({ children }) => (
                  <h2 className="card-title text-wrap">{children}</h2>
                ),
              }}
            />
            <p>
              <span className="font-bold">Country: </span>
              {others.data.country}
            </p>
            <p>
              <span className="font-bold">Degree: </span>
              {others.data.degree}
            </p>
            <p>
              <span className="font-bold">Program: </span>
              {others.data.program}
            </p>
            <p>
              <span className="font-bold">Date: </span>
              {others.data.date}
            </p>
            <div className="card-actions justify-end">
              <a href={others.data.link}>
                <button className="btn">Link</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OtherScholarships;
