
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
        <div className='mx-1'>
            <div className='md:h-[60vh]'>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`}
                                 className="carousel w-max border-2 border-primary  md:w-[70vw] mt-12 mx-auto md:h-[60vh]"/>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="">
                <div className='mx-auto my-12 max-w-7xl'>
                    <hr className='w-10 mx-auto h-1 bg-primary'/>
                    <h1 className='text-5xl font-bold text-center mx-auto'>Overview</h1>
                </div>
            </div>
            <div>
                <div className='mx-auto p-4 my-12 max-w-7xl'>
                    <p className='text-sm sm:text-2xl text-left mx-auto'>Directorate of International and
                        Collaborations (DoIC) is headed by a team of dedicated staff and supported by the advisory
                        council with a group of faculty and administrators representing key academic units are
                        functional under this office. DoIC is established to promote internationalization and
                        partnerships with international institutes is functional for collaboration with institutes
                        globally for student and faculty exchange, semester abroad program, student mobility, higher
                        education opportunities and signing of MoUs with local and global educational and research
                        Institutes. Also supports local student chapter of The International Association for the
                        Exchange of Students for Technical Experience (IAESTE) team also takes care and all
                        International activities, projects, funding, mobility (short, long) and Summer and Winter
                        Schools.
                        In summary, this office provides the comprehensive and unified framework within which all work
                        in the International arena can seamlessly be achieved.</p>
                </div>
                <div className='bg-accent p-4 mb-4 rounded-xl '>
                    <div className='mx-auto  max-w-7xl'>
                        <h2 className='text-2xl text-primary text-left mx-auto'>Provide Direction</h2>
                        <p className='text-sm sm:text-xl text-left mx-auto text-white'>The Office is primarily responsible for
                            providing direction, assistance and synchronizing all of the University’s international work
                            with overseas Institutions and Governments. While providing this leadership role, the office
                            does recognize the importance of individual initiatives, needs and innovativeness of faculty
                            and
                            students across the University. Thus, its primary role is to coordinate the individual
                            activities through a central location, within the context of a well thought out
                            international
                            strategic plan and to facilitate the interrelated and concomitant activities. The key focus
                            is
                            to provide a centralized location for helping the faculty, staff and students the needed
                            assistance for all of their international work. Individual decentralized colleges and
                            schools
                            will still continue to pursue their individual interests although they will be required to
                            coordinate their work through this central location.

                            The office will also help align international opportunities with each college’s curriculum
                            enabling student mobility across institutions, enroll transnational students for both short
                            and
                            long term, facilitate institutional grants and contracts, and pursue value creating projects
                            for
                            the University in general.</p>
                    </div>
                    <div className='mx-auto my-12 max-w-7xl'>
                        <h2 className='text-2xl text-primary text-left mx-auto'>Resource Centre</h2>
                        <p className='text-sm sm:text-xl text-left mx-auto text-white'>It will serve as the primary liaison and
                            resource center for the University’s vital international linkages, by supporting the
                            development
                            of all memorandum of agreements and partnerships with overseas universities, foreign
                            governments
                            and international organizations abroad. It will help promote the involvement of Manipal’s
                            faculty members, staff and students in international research and development projects,
                            facilitate access to international funding opportunities and in general enrich Manipal
                            Academy
                            of Higher Education’s engagement with global cultures by sharing our physical and
                            intellectual
                            resources with other societies across the world.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;