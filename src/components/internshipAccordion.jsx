
import {PrismicRichText, useAllPrismicDocumentsByType} from '@prismicio/react'


const InternshipAccordion = () => {
    const [internships, { state, error }] = useAllPrismicDocumentsByType('internships');

    if (state === 'loading') {
        return <div>Loading internships...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!internships || internships.length === 0) {
        return <div>No internships found.</div>;
    }
    console.log('Internships:', internships);
    console.log('State:', state);
    console.log('Error:', error);
    return (
        <div>

            {internships.map((internship) => (
                <div key={internship.id}>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <div className="card-body">
                            <div className="card-title"><PrismicRichText
                                field={internship.data.name}
                                components={{
                                    heading1: ({children}) => <h2>{children}</h2>,
                                }}
                            /></div>
                            <p>{internship.data.description}</p>
                            <p><span className='font-bold'>Deadline:</span> {internship.data.deadline}</p>
                            <div className="card-actions justify-end">

                                <button className="btn btn-primary"><a href={internship.data.link}>Know more</a></button>
                            </div>
                        </div>
                    </div>
                    {/* Render internship details */}



                </div>
            ))}
        </div>
    );
};

export default InternshipAccordion;