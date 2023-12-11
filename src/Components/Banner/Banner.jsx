import { useEffect, useRef } from "react";
// import Particles from "../Particles/Particles";
import Typed from "typed.js";


const Banner = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ["Web Developer", "Programmer", "MERN Developer"],
        startDelay: 300,
        typeSpeed: 90,
        backSpeed: 100,
        backDelay: 100,
        smartBackspace: true,
        loop: true,
        showCursor: true,
        cursorChar: "!"
    });

    return () => {
        typed.destroy();
    };


}, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16 md:py-28">
       {/* <Particles/> */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-8">
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 font-oswald">
            Rashedul Hoque
            <br />
            <div className='mt-4 text-2xl'>I am a <span className='ml-2 text-blue-300 dotted' ref={el}></span></div>
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 font-roboto">
            Welcome to my portfolio! I am passionate about creating interactive and user-friendly web experiences.
          </p>
          <a
            href="/path/to/your/resume.pdf" // Replace with the actual path to your resume
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 px-4 py-2 rounded-md text-sm md:text-base font-semibold font-roboto hover:bg-blue-100"
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
