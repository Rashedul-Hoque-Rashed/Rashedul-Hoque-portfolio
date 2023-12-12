import { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; 


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="bg-gray-800 py-4 px-8" id="home">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl font-oswald cursor-pointer">Rashed</div>
        <div className="hidden md:flex space-x-4">
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
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute right-4 top-14 pb-6 px-10 bg-gray-800 rounded-b-xl">
          <div className="flex flex-col items-center mt-2 space-y-2">
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
        </div>
      )}
    </nav>
  );
};


export default Navbar;
