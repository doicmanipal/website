import {PrismicRichText, useAllPrismicDocumentsByType} from "@prismicio/react";

const EventModal = () => {
    const [event, { state, error }] = useAllPrismicDocumentsByType('event');

    if (state === 'loading') {
        return <span className="loading mx-auto flex loading-ring loading-lg"></span>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!event || event.length === 0) {
        return <div className='hidden'>No internships found.</div>;
    }
    return (
        <>
            {event.map((events) => (
                <div key={events.id}>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Details</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <PrismicRichText
                                field={events.data.title}
                                components={{
                                    heading1: ({children}) => <h3 className='card-title'>{children}</h3>,
                                }}
                            />
                            <p><span className='font-bold'>Organizer:</span></p>
                            <p><span className='font-bold'>Venue:</span></p>
                            <p><span className='font-bold'>Description:</span></p>
                            <p><span className='font-bold'>Starting at:</span></p>
                            <p><span className='font-bold'>Ending at:</span></p>
                            <p><span className='font-bold'>Price:</span></p>
                            <p><span className='font-bold'>Registration status:</span></p>
                            <button className="btn btn-primary"><a href={events.data.link}>Brochure</a>
                            </button>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            ))}
        </>
    );
};

export default EventModal;