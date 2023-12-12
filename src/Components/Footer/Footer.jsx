import facebook from '../../assets/icons/facebook.png'
import linkedin from '../../assets/icons/linkedin.png'
import twitter from '../../assets/icons/twitter.png'
import github from '../../assets/icons/github-sign.png'



const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white pt-16">
            <div className="container mx-auto p-8">
                <h1 className="text-2xl text-center font-bold mb-4 font-oswald">
                    Rashedul Hoque
                </h1>
                <div className="flex space-x-4 justify-center mb-4">
                <a href="#home" className="cursor-pointer text-teal-300 font-bold font-roboto">
              Home
            </a>
          <a href="#skills" className="cursor-pointer text-teal-300 font-bold font-roboto">
              Skills
            </a>
          <a href="#projects" className="cursor-pointer text-teal-300 font-bold font-roboto">
              Projects
            </a>
          <a href="#education" className="cursor-pointer text-teal-300 font-bold font-roboto">
              Education
            </a>
          <a href="#contact" className="cursor-pointer text-teal-300 font-bold font-roboto">
              Contact
            </a>
                </div>
                <div className="flex space-x-6 justify-center">
                    <a
                        href="https://www.facebook.com/RashedulHoque23/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={facebook} alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rashedul-hoque-rashed/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                    </a>
                    <a
                        href="https://twitter.com/Rashedul2Hoque"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={twitter} alt="Twitter" className="w-6 h-6" />
                    </a>
                    <a
                        href="https://github.com/Rashedul-Hoque-Rashed"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={github} alt="Twitter" className="w-6 h-6" />
                    </a>
                </div>
            </div>
            <p className="text-center"><small>Copyright © {new Date().getFullYear()} Rashedul Hoque - All right reserved</small></p>
        </div>
    );
};



export default Footer;