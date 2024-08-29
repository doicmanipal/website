import {Link} from "react-router-dom";

const Hero = () => {

    return (
        <div className='mt-4'>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://images.prismic.io/doic-website/Zs3ZEUaF0TcGJba6_doic7.jpg?auto=format,compress)",
                }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to the website of the <br/> <span className='text-primary' >Directorate Of International Collaborations MUJ.</span> </h1>
                        <Link to='/events'><button className="btn btn-primary text-white">Our Events</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;