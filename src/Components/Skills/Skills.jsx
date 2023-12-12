import Marquee from "react-fast-marquee";


const Skills = () => {

  return (
    <section className="container mx-auto px-8 py-24" id="skills">
      <h2 className="text-3xl font-bold text-center font-oswald mb-1">Professional Skills</h2>
      <h6 className='text-center mb-8 font-semibold font-roboto'>---My Talent---</h6>
      <Marquee speed={120} className="mb-20">
        <img src="https://raw.githubusercontent.com/Rashedul-Hoque-Rashed/Rashedul-Hoque-Rashed/97a4296b821c2e138fcd27d92441ffb79d15d903/asset/icons/HTML.svg" alt="" className="w-20 h-20 mr-20" />

        <img src="https://raw.githubusercontent.com/Rashedul-Hoque-Rashed/Rashedul-Hoque-Rashed/97a4296b821c2e138fcd27d92441ffb79d15d903/asset/icons/CSS.svg" alt="" className="w-20 h-20 mr-20" />

        <img src="https://raw.githubusercontent.com/Rashedul-Hoque-Rashed/Rashedul-Hoque-Rashed/97a4296b821c2e138fcd27d92441ffb79d15d903/asset/icons/TailwindCSS-Dark.svg" alt="" className="w-20 h-20 mr-20" />

        <img src="https://raw.githubusercontent.com/Rashedul-Hoque-Rashed/Rashedul-Hoque-Rashed/97a4296b821c2e138fcd27d92441ffb79d15d903/asset/icons/MaterialUI-Dark.svg" alt="" className="w-20 h-20 mr-20" />

        <img src="https://raw.githubusercontent.com/Rashedul-Hoque-Rashed/Rashedul-Hoque-Rashed/97a4296b821c2e138fcd27d92441ffb79d15d903/asset/icons/JavaScript.svg" alt="" className="w-20 h-20 mr-20" />

        <img src="https://raw.githubusercontent.com/Rashedul-Hoque-Rashed/Rashedul-Hoque-Rashed/97a4296b821c2e138fcd27d92441ffb79d15d903/asset/icons/React-Dark.svg" alt="" className="w-20 h-20 mr-20" />

        <img src="https://raw.githubusercontent.com/Rashedul-Hoque-Rashed/Rashedul-Hoque-Rashed/97a4296b821c2e138fcd27d92441ffb79d15d903/asset/icons/Firebase-Dark.svg" alt="" className="w-20 h-20 mr-20" />
      </Marquee>
      <Marquee direction="right" speed={120}>
        <img src="https://raw.githubusercontent.com/Rashedul-Hoque-Rashed/Rashedul-Hoque-Rashed/97a4296b821c2e138fcd27d92441ffb79d15d903/asset/icons/NodeJS-Dark.svg" alt="" className="w-20 h-20 mr-20" />

        <img src="https://raw.githubusercontent.com/Rashedul-Hoque-Rashed/Rashedul-Hoque-Rashed/97a4296b821c2e138fcd27d92441ffb79d15d903/asset/icons/ExpressJS-Dark.svg" alt="" className="w-20 h-20 mr-20" />

        <img src="https://raw.githubusercontent.com/Rashedul-Hoque-Rashed/Rashedul-Hoque-Rashed/97a4296b821c2e138fcd27d92441ffb79d15d903/asset/icons/MongoDB.svg" alt="" className="w-20 h-20 mr-20" />

        <img src="https://raw.githubusercontent.com/Rashedul-Hoque-Rashed/Rashedul-Hoque-Rashed/97a4296b821c2e138fcd27d92441ffb79d15d903/asset/icons/Vercel-Dark.svg" alt="" className="w-20 h-20 mr-20" />

      </Marquee>

    </section>
  );
};

export default Skills;
