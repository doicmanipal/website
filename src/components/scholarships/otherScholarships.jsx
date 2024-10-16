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
              <button className="btn btn-primary text-white">
                <a href={other.data.link}>Link</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="15"
                  fill="white"
                >
                  <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                </svg>
              </button>{" "}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OtherScholarships;
