import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { RiDownload2Fill } from "react-icons/ri";
import myPhoto from '../../assets/images/me.png'

const Banner = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["front-end development", "Programmer", "MERN Developer"],
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
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-8">
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 font-oswald">
            Rashedul Hoque
            <br />
            <div className='mt-4 text-2xl'>I am a <span className='ml-2 text-blue-300 dotted' ref={el}></span></div>
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 font-roboto">
            From Bangladesh, Comilla. I am rich in front-end development, I am also good at MERN. I love to talk with you about our unique.
          </p>
          <a
            href="https://drive.google.com/u/0/uc?id=10mnMHxYmq8a9QZxaHdT2FixJrIGRbtWB&export=download" // Replace with the actual path to your resume
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 px-4 py-2 rounded-md text-sm md:text-base font-semibold font-roboto hover:bg-blue-100 flex items-center gap-4 w-fit"
          >
            Download Resume
            <RiDownload2Fill className="w-6 h-6" />
          </a>
        </div>

        <div className="md:w-1/2">
          <img src={myPhoto} alt="Rashedul Hoque" className="w-full h-auto rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
