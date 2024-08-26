
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
    const images = [
        'https://doic-weld.vercel.app/doic1.jpeg',
        'https://doic-weld.vercel.app/doic2.jpeg',
        'https://doic-weld.vercel.app/doic6.jpg',
        'https://doic-weld.vercel.app/doic7.jpg',
        "https://doic-weld.vercel.app/doic8.jpg",
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
    };
    return (
        <div className=''>
            <div className='h-[30vh] md:h-[60vh]'>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`}
                                 className="carousel w-max border-2 border-primary md:w-[70vw] mt-12 mx-auto h-[30vh] md:h-[60vh]"/>
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    );
};

export default Hero;