

const projectsData = [
    {
        id: 1,
        title: 'Freeio Ltd.',
        image: 'https://i.ibb.co/CVTnv0s/Screenshot-5.png',
        description: 'It is an online marketplace. If you are a buyer you can post job and search freelancer. Or, if you are a freelancer you will find the best jobs for you.',
        liveLink: 'https://quiet-swan-55d97b.netlify.app',
        githubLink: 'https://github.com/Rashedul-Hoque-Rashed/online-marketplaces-client',
    },
    {
        id: 2,
        title: 'Glamour Brand Shop',
        image: 'https://i.ibb.co/3cLKwpJ/Screenshot-7.png',
        description: 'This is a beauty brand shop. there are some brands, customers will buy any beauty product from some brands. Sellers can add products, update products, and delete products as him/her need.',
        liveLink: 'https://brand-shop-75512.web.app/',
        githubLink: 'https://github.com/Rashedul-Hoque-Rashed/Brand-Shop-client',
    },
    {
        id: 3,
        title: 'Survey',
        image: 'https://i.ibb.co/t4XhV7V/Screenshot-8.png',
        description: "This is a polling and survey-type website. A surveyor can post any post. Users and pro-users can poll any post and report any post. Pro-users also comment on any post. Admin can manage all surveyor posts and manage user's roles.",
        liveLink: 'https://polling-and-survey-afe3e.web.app/',
        githubLink: 'https://github.com/Rashedul-Hoque-Rashed/polling-and-survey-client',
    },
];

const Projects = () => {
    return (
        <section className="container mx-auto px-8 pb-24">
            <h2 className="text-3xl font-bold text-center font-oswald mb-1">Portfolio</h2>
            <h6 className='text-center mb-8 font-semibold font-roboto'>---My Cases---</h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {projectsData.map((project) => (
                    <div key={project.id} className="bg-white p-4 rounded-md shadow-md flex flex-col">
                        <img src={project.image} alt={project.title} className="w-full h-52 rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                        <div className="flex space-x-4">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:from-teal-500 hover:to-blue-500"
                            >
                                Live Link
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800"
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
