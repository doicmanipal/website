import {PrismicRichText, useAllPrismicDocumentsByType} from "@prismicio/react";


const MouCard = () => {
    const [mou, { state, error }] = useAllPrismicDocumentsByType('mou');

    if (state === 'loading') {
        return <span className="loading mx-auto flex loading-ring loading-lg"></span>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!mou || mou.length === 0) {
        return <div className='hidden'>No internships found.</div>;
    }
    return (
        <>
        {mou.map((mous) => (
            <div key={mous.id}>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <div className="card-title">
                            <PrismicRichText
                                field={mous.data.name}
                                components={{
                                    heading1: ({children}) => <h2>{children}</h2>,
                                }}
                            />
                        </div>
                        <p><span>Qs:</span>{mous.data.qs}</p>
                        <p><span>Department:</span>{mous.data.department}</p>
                        <p><span>Muj-nodal:</span>{mous.data.nodal}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href={mous.data.link}>MoU</a></button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </>
);
};

export default MouCard;