import { useState, useEffect } from "react";
import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
  PrismicImage,
} from "@prismicio/react";

const EventCard = ({ activeTab }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [documents, { state, error: fetchError }] =
    useAllPrismicDocumentsByType("event");

  useEffect(() => {
    if (state === "loaded") {
      setEvents(documents);
      setLoading(false);
    } else if (state === "error") {
      setError(fetchError);
      setLoading(false);
    }
  }, [state, documents, fetchError]);

  if (loading) {
    return (
      <span className="loading mx-auto flex loading-ring loading-lg"></span>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredEvents = events.filter(
    (event) => event.data.status === activeTab
  );

  return (
    <>
      {filteredEvents.length === 0 && (
        <div>No events found for the selected status.</div>
      )}
      {filteredEvents.map((event) => (
        <div
          className="hover:-translate-y-3 translate-y-0 duration-300 mb-2"
          key={event.id}
        >
          <div className="card card-side bg-base-100 shadow-xl">
            <PrismicImage
              className="w-[300px] aspect-[3/4] hidden md:flex rounded-l-2xl"
              field={event.data.eventposter}
              alt="poster"
            />
            <div className="card-body">
              <div>
                <PrismicRichText
                  field={event.data.title}
                  components={{
                    heading1: ({ children }) => (
                      <h2 className="card-title">{children}</h2>
                    ),
                  }}
                />
              </div>
              <p>
                <span className="font-bold">Organizer:</span>{" "}
                {event.data.organizer}
              </p>
              <p>
                <span className="font-bold">Venue:</span> {event.data.venue}
              </p>
              <p>
                <span className="font-bold">Description:</span>{" "}
                {event.data.description}
              </p>
              <p>
                <span className="font-bold">Starting at:</span>{" "}
                {event.data.start}
              </p>
              <p>
                <span className="font-bold">Ending at:</span> {event.data.end}
              </p>
              <p>
                <span className="font-bold">Price:</span> {event.data.price}
              </p>
              <p>
                <span className="font-bold">Registration status:</span>{" "}
                {event.data.status}
              </p>
              <a href={event.data.link} target="_blank">
                <button className="btn btn-primary">Brochure</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventCard;
