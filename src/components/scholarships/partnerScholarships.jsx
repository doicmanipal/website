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
                <div className="mx-auto" key={partners.id}>
                    <div className="card bg-primary text-primary-content min-w-80">
                        <div className="card-body">
                            <PrismicRichText
                                field={partners.data.name}
                                components={{
                                    heading1: ({children}) => <h2 className='card-title'>{children}</h2>,
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
                </div>
            ))}
        </>
    );
};

export default PartnerScholarships;