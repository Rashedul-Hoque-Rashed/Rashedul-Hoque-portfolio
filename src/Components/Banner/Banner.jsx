

const Banner = () => {
  const jobTitle = 'Web Developer';

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16 md:py-28">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-8">
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 font-oswald">
            Hello! I am Rashedul Hoque
            <br />
            <span className="text-3xl md:text-4xl text-blue-300 font-oswald">{jobTitle}</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 font-roboto">
            Welcome to my portfolio! I am passionate about creating interactive and user-friendly web experiences.
          </p>
          <a
            href="/path/to/your/resume.pdf" // Replace with the actual path to your resume
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 px-4 py-2 rounded-md text-sm md:text-base font-semibold hover:bg-blue-100"
          >
            Download Resume
          </a>
        </div>

        <div className="md:w-1/2">
          {/* <img src={myPhoto} alt="Rashedul Hoque" className="w-full h-auto rounded-full" /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
