import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";

const PartnerScholarships = () => {
  const [partners, { state, error }] =
    useAllPrismicDocumentsByType("scholarships");

  if (state === "loading") {
    return (
      <span className="loading mx-auto flex loading-ring loading-lg"></span>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!partners || partners.length === 0) {
    return <div className="hidden">No scholarships found.</div>;
  }
  return (
    <>
      {partners.map((partner) => (
        // <div className="card bg-primary text-primary-content min-h-[17rem] mx-auto hover:-translate-y-3 translate-y-0 w-full xl:w-[30%] md:w-[45%] duration-300"  key={partners.id}>
        //     <div className="card-body text-clip text-wrap">
        //         <PrismicRichText
        //             field={partners.data.name}
        //             components={{
        //                 heading1: ({children}) => <h2 className='card-title text-wrap'>{children}</h2>,
        //             }}
        //         />
        //         <p><span className='font-bold'>Country: </span>{partners.data.country}</p>
        //         <p><span className='font-bold'>Opening month: </span>{partners.data.start}</p>
        //         <p><span className='font-bold'>Closing month: </span>{partners.data.end}</p>
        //         <div className="card-actions justify-end">
        //             <a href={partners.data.link}><button className="btn">Link</button></a>
        //         </div>
        //     </div>
        // </div>
        <div className="collapse collapse-arrow bg-base-200" key={partner.id}>
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            <PrismicRichText
              field={partner.data.name}
              components={{
                heading1: ({ children }) => <h2 className="">{children}</h2>,
              }}
            />{" "}
          </div>
          <div className="collapse-content space-y-2">
            <div>
              <p>
                <span className="font-bold">Country: </span>
                {partner.data.country}
              </p>
              <p>
                <span className="font-bold">Opening month: </span>
                {partner.data.start}
              </p>
              <p>
                <span className="font-bold text-clip text-nowrap ">
                  Closing month:{" "}
                </span>
                {partner.data.end}
              </p>
            </div>
            <div>
              {" "}
              <button className="btn btn-primary text-white">
                <a href={partner.data.link}>Link</a>
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

export default PartnerScholarships;
