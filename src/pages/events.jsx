import EventCard from "../components/eventCard.jsx";
import {client} from "../utils/prismic.js";
import {PrismicProvider} from "@prismicio/react";

const Events = () => {
    return (<>
        <div className=" max-w-7xl mx-auto px-2">
            <div className='mx-auto mb-6 mt-12 max-w-7xl'>
                <hr className='w-10 mx-auto h-1 bg-primary'/>
                <h1 className='text-5xl font-bold text-center flex justify-center mx-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 448 512" height="50px" width="50px" className='fill-primary px-1'>
                        <path
                            d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm80 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-96 0z"/>
                    </svg>
                    Events

                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-12'>
                <PrismicProvider client={client}>
                    <EventCard></EventCard>
                </PrismicProvider>
            </div>
        </div>
    </>);
};

export default Events;