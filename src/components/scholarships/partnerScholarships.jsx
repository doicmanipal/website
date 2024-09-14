import {PrismicRichText, useAllPrismicDocumentsByType} from "@prismicio/react";


const PartnerScholarships = () => {
    const [partner, { state, error }] = useAllPrismicDocumentsByType('scholarships');

    if (state === 'loading') {
        return <span className="loading mx-auto flex loading-ring loading-lg"></span>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!partner || partner.length === 0) {
        return <div className='hidden'>No scholarships found.</div>;
    }
    return (
        <>
            {partner.map((partners) => (
                <div className="card bg-primary text-primary-content min-h-[17rem] mx-auto hover:-translate-y-3 translate-y-0 w-full xl:w-[30%] md:w-[45%] duration-300"  key={partners.id}>
                    <div className="card-body text-clip text-wrap">
                        <PrismicRichText
                            field={partners.data.name}
                            components={{
                                heading1: ({children}) => <h2 className='card-title text-wrap'>{children}</h2>,
                            }}
                        />
                        <p><span className='font-bold'>Country: </span>{partners.data.country}</p>
                        <p><span className='font-bold'>Opening month: </span>{partners.data.start}</p>
                        <p><span className='font-bold'>Closing month: </span>{partners.data.end}</p>
                        <div className="card-actions justify-end">
                            <a href={partners.data.link}><button className="btn">Link</button></a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PartnerScholarships;