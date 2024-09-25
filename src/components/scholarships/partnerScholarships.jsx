import {PrismicRichText, useAllPrismicDocumentsByType} from "@prismicio/react";


const PartnerScholarships = () => {
    const [partners, { state, error }] = useAllPrismicDocumentsByType('scholarships');

    if (state === 'loading') {
        return <span className="loading mx-auto flex loading-ring loading-lg"></span>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!partners || partners.length === 0) {
        return <div className='hidden'>No scholarships found.</div>;
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
                <button className="btn btn-primary">
                  <a href={partner.data.link}>Link</a>
                </button>{" "}
              </div>
            </div>
          </div>
        ))}
      </>
    );
};

export default PartnerScholarships;