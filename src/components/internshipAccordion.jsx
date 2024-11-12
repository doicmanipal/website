import {
  PrismicImage,
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";

const InternshipAccordion = ({ activeTab }) => {
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

  const filteredInternships = internships.filter((internship) => {
    const [day, month, year] = internship.data.deadline.split("/").map(Number);
    const deadlineDate = new Date(year, month - 1, day);

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (activeTab === "Open") {
      return deadlineDate >= currentDate;
    } else {
      return deadlineDate < currentDate;
    }
  });

  if (filteredInternships.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No {activeTab.toLowerCase()} internships available.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {filteredInternships.map((internship) => (
        <div key={internship.id}>
          <div className="card card-side bg-base-100 shadow-xl">
            <PrismicImage
              className="w-[300px] aspect-[3/4] hidden md:flex rounded-l-2xl"
              field={internship.data.photo}
              alt="poster"
            />
            <div className="card-body">
              <div>
                <PrismicRichText
                  field={internship.data.name}
                  components={{
                    heading1: ({ children }) => (
                      <h2 className="card-title">{children}</h2>
                    ),
                  }}
                />
              </div>
              <p>
                <span className="font-bold">Country:</span>{" "}
                {internship.data.country}
              </p>

              <p>
                <span className="font-bold">Description:</span>{" "}
                {internship.data.description}
              </p>
              <p>
                <span className="font-bold">Benefits:</span>{" "}
                {internship.data.benefits}
              </p>
              <p>
                <span className="font-bold">Deadline:</span>{" "}
                {internship.data.deadline}
              </p>
              <p>
                <span className="font-bold">Stipend/Scholarships:</span>{" "}
                {internship.data.money}
              </p>
              <div className="flex flex-col md:flex-row justify-start gap-y-2 md:gap-x-2">
                <a href={internship.data.brochure} target="_blank">
                  <button className="btn btn-primary text-white w-max flex items-center justify-center">
                    <p>Brochure</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      height="15"
                      fill="white"
                    >
                      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                    </svg>
                  </button>
                </a>
                <a href={internship.data.noc} target="_blank">
                  <button className="btn btn-primary text-white w-max flex items-center justify-center">
                    <p>Apply For Noc</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      height="15"
                      fill="white"
                    >
                      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                    </svg>
                  </button>
                </a>
                <a href={internship.data.link} target="_blank">
                  <button className="btn btn-primary text-white w-max flex items-center justify-center">
                    <p>Apply For Internship</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      height="15"
                      fill="white"
                    >
                      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InternshipAccordion;
