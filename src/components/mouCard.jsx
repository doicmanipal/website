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
        return <div className='hidden'>No mous's found.</div>;
    }
    return (
        <>
        {mou.map((mous) => (
            <div className='hover:-translate-y-3 translate-y-0 duration-300' key={mous.id}>
                <div className="card bg-base-100 min-w-80 shadow-xl">
                    <div className="card-body">
                        <div className="">
                            <PrismicRichText
                                field={mous.data.name}
                                components={{
                                    heading1: ({children}) => <h2 className='card-title'>{children}</h2>,
                                }}
                            />
                        </div>
                        <p><span className='font-bold'>Qs: </span>{mous.data.qs}</p>
                        <p><span className='font-bold'>Department: </span>{mous.data.department}</p>
                        <p><span className='font-bold text-clip text-nowrap '>Muj-nodal: </span>{mous.data.nodal}</p>
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