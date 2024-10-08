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
          className="hover:-translate-y-3 translate-y-0 duration-300"
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
              <div className="flex items-center gap-x-2">
                <a href={event.data.brochure} target="_blank">
                  <button className="btn btn-primary w-max flex items-center justify-center">
                    <p>Brochure</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      height="20"
                    >
                      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                    </svg>
                  </button>
                </a>
                <a href={event.data.link} target="_blank">
                  <button className="btn btn-primary w-max flex items-center justify-center">
                    <p>Apply</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      height="20"
                    >
                      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventCard;
