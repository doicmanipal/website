
import { PrismicRichText, useAllPrismicDocumentsByType, PrismicImage} from "@prismicio/react";



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
                <div className='hover:-translate-y-3 translate-y-0 duration-300' key={events.id}>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure>
                            <PrismicImage className='w-[18rem] hidden md:flex aspect-[3/4] rounded-l-2xl'
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
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default EventCard;