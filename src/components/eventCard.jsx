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
                                <PrismicProvider client={client}>
                                    <EventModal />
                                </PrismicProvider>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default EventCard;