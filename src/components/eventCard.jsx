import EventModal from "./eventModal.jsx";
import {PrismicProvider, PrismicRichText, useAllPrismicDocumentsByType, PrismicImage} from "@prismicio/react";
import {client} from "../utils/prismic.js";


const EventCard = () => {
    const [event, { state, error }] = useAllPrismicDocumentsByType('event');

    if (state === 'loading') {
        return <span className="loading mx-auto flex loading-ring loading-lg"></span>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!event || event.length === 0) {
        return <div className='hidden'>No events found.</div>;
    }
    return (
        <>
            {event.map((events) => (
                <div className='' key={events.id}>

                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure>
                            <PrismicImage className='w-[12rem] aspect-[3/4] rounded-l-2xl'
                                          field={events.data.eventposter}
                                          alt="poster"/>
                        </figure>
                        <div className="card-body">
                            <div className=""><PrismicRichText
                                field={events.data.title}
                                components={{
                                    heading1: ({children}) => <h2 className='card-title'>{children}</h2>,
                                }}
                            /></div>
                            <p>Click the button for further details.</p>
                            <div className="card-actions justify-end">
                                <div key={events.id}>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn"
                                            onClick={() => document.getElementById('my_modal_5').showModal()}>Details
                                    </button>
                                    <dialog id="my_modal_5" className="modal gap-2 modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <PrismicRichText
                                                field={events.data.title}
                                                components={{
                                                    heading1: ({children}) => <h3
                                                        className='card-title'>{children}</h3>,
                                                }}
                                            />
                                            <p><span className='font-bold'>Organizer:</span> {events.data.organizer}</p>
                                            <p><span className='font-bold'>Venue:</span> {events.data.venue}</p>
                                            <p><span className='font-bold'>Description:</span> {events.data.description}
                                            </p>
                                            <p><span className='font-bold'>Starting at:</span> {events.data.start}</p>
                                            <p><span className='font-bold'>Ending at:</span> {events.data.end}</p>
                                            <p><span className='font-bold'>Price:</span> {events.data.price}</p>
                                            <p><span
                                                className='font-bold'>Registration status:</span> {events.data.status}
                                            </p>
                                            <a href={events.data.link} target='_blank'>
                                                <button className="btn btn-primary">Brochure
                                                </button>
                                            </a>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default EventCard;