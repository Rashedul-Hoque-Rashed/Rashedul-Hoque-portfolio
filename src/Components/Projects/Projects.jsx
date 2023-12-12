import entertain1 from '../../assets/images/entertain1.png'
import entertain2 from '../../assets/images/entertain2.png'
import entertain3 from '../../assets/images/entertain3.png'
import freeio1 from '../../assets/images/freeio1.png'
import freeio2 from '../../assets/images/freeio2.png'
import freeio3 from '../../assets/images/freeio3.png'
import glamour1 from '../../assets/images/glamour1.png'
import glamour2 from '../../assets/images/glamour2.png'
import glamour3 from '../../assets/images/glamour3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Autoplay, Pagination } from 'swiper/modules';



const projectsData = [
    {
        id: 1,
        title: 'Freeio Ltd.',
        image1: freeio1,
        image2: freeio2,
        image3: freeio3,
        description: 'It is an online marketplace. If you are a buyer you can post job and search freelancer. Or, if you are a freelancer you will find the best jobs for you.',
        liveLink: 'https://quiet-swan-55d97b.netlify.app',
        githubLink: 'https://github.com/Rashedul-Hoque-Rashed/online-marketplaces-client',
    },
    {
        id: 2,
        title: 'Glamour Brand Shop',
        image1: glamour1,
        image2: glamour2,
        image3: glamour3,
        description: 'This is a beauty brand shop. there are some brands, customers will buy any beauty product from some brands. Sellers can add products, update products, and delete products as him/her need.',
        liveLink: 'https://brand-shop-75512.web.app/',
        githubLink: 'https://github.com/Rashedul-Hoque-Rashed/Brand-Shop-client',
    },
    {
        id: 3,
        title: 'Entertain Event Management',
        image1: entertain1,
        image2: entertain2,
        image3: entertain3,
        description: "This is an entertainment event management website. Users can book any entertainment show, and join that show. Manegments will add any show details that help users to find their perfect entertainment show.",
        liveLink: 'https://a9-event-management.web.app/',
        githubLink: 'https://github.com/Rashedul-Hoque-Rashed/event-management',
    },
];

const Projects = () => {
    return (
        <section className="container mx-auto px-8 pb-24" id='projects'>
            <h2 className="text-3xl font-bold text-center font-oswald mb-1">Projects</h2>
            <h6 className='text-center mb-8 font-semibold font-roboto'>---My Cases---</h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {projectsData.map((project) => (
                    <div key={project.id} className="bg-white p-4 rounded-md shadow-md flex flex-col">
                         <Swiper
        
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="w-full h-44 rounded-md mb-4 shadow-xl"
      >
        <SwiperSlide> <img src={project.image1} alt={'slide1'} className="rounded-md mb-4" /> </SwiperSlide>

        <SwiperSlide> <img src={project.image2} alt={'slide2'} className="rounded-md mb-4" /> </SwiperSlide>

        <SwiperSlide> <img src={project.image3} alt={'slide3'} className=" rounded-md mb-4" /> </SwiperSlide>
      </Swiper>
                        {/* <img src={project.image} alt={project.title} className="w-full h-52 rounded-md mb-4" /> */}
                        <h3 className="text-xl font-semibold mb-2 font-oswald">{project.title}</h3>
                        <p className="text-gray-700 mb-4 flex-grow font-roboto">{project.description}</p>
                        <div className="flex space-x-4">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm font-roboto font-semibold hover:from-teal-500 hover:to-blue-500"
                            >
                                Live Link
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-roboto font-semibold hover:bg-gray-800"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
