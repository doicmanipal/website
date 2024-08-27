
import {PrismicRichText, useAllPrismicDocumentsByType} from '@prismicio/react'


const InternshipAccordion = () => {
    const [internships, { state, error }] = useAllPrismicDocumentsByType('internships');

    if (state === 'loading') {
        return <span className="loading mx-auto flex loading-ring loading-lg"></span>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!internships || internships.length === 0) {
        return <div className='hidden'>No internships found.</div>;
    }
    console.log('Internships:', internships);
    console.log('State:', state);
    console.log('Error:', error);
    return (
        <div>
            {internships.map((internship) => (
                <div key={internship.id}>
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked/>
                            <div className="collapse-title text-xl font-medium">
                                <PrismicRichText
                                    field={internship.data.name}
                                    components={{
                                        heading1: ({children}) => <h2>{children}</h2>,
                                    }}
                                />
                            </div>
                            <div className="collapse-content">
                                <p>{internship.data.description}</p>
                                <p><span className='font-bold'>Deadline:</span> {internship.data.deadline}</p>
                                <button className="btn btn-primary"><a href={internship.data.link}>Know
                                    more</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InternshipAccordion;