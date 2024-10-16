import {Link} from "react-router-dom";

const Hero = () => {

    return (
      <div className="mt-4">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://images.prismic.io/doic-website/Zs3ZEUaF0TcGJba6_doic7.jpg?auto=format,compress)",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                Welcome to the{" "}
                <span className="text-primary">
                  Directorate Of International Collaborations MUJ.
                </span>{" "}
              </h1>
              <Link to="/events">
                <button className="btn btn-primary text-white">
                  Our Events
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="15"
                    fill="white"
                  >
                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;