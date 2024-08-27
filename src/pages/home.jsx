import Hero from "../components/hero.jsx";



const Home = () => {

    return (
        <div>
            <Hero></Hero>
            <div className="text-pretty ">
                <div className='mx-auto mb-6 mt-12 max-w-7xl'>
                    <hr className='w-10 mx-auto h-1 bg-primary'/>
                    <h1 className='text-5xl font-bold flex justify-center text-center mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="50px" width="50px"
                             className='fill-primary px-1'>
                            <path
                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                        </svg>
                        Overview
                    </h1>
                </div>
            </div>
            <div className='max-w-7xl px-2 mx-auto'>
                <div className='mx-auto p-4  max-w-7xl'>
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
                <hr className='h-1 max-w-7xl mb-4 bg-primary'/>
                <div className='bg-accent p-4 mb-12 rounded-xl '>
                    <div className='mx-auto max-w-7xl'>

                        <h2 className='text-2xl text-primary text-left flex items-center'><svg xmlns="http://www.w3.org/2000/svg"
                                                                                               viewBox="0 0 512 512" height="30" width="30" className='fill-primary px-1'>
                            <path
                                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                        </svg>
                            Provide Direction

                        </h2>
                        <p className='text-sm sm:text-xl text-left mx-auto text-white text-pretty'>The Office is
                            primarily
                            responsible for
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
                        <h2 className='text-2xl text-primary text-left  flex items-center'><svg xmlns="http://www.w3.org/2000/svg"
                                                                                                viewBox="0 0 448 512" height="30" width="30" className='fill-primary px-1'>
                            <path
                                d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                        </svg>
                            Resource Centre

                        </h2>
                        <p className='text-sm sm:text-xl text-left mx-auto text-white'>It will serve as the primary
                            liaison and
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

export default Home;