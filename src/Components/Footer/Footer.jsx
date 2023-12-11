import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import facebook from '../../assets/icons/facebook.png'
import linkedin from '../../assets/icons/linkedin.png'
import twitter from '../../assets/icons/twitter.png'
import github from '../../assets/icons/github-sign.png'


const NavItem = ({ to, label, onClick }) => (
    <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
            isActive ? 'text-teal-300 font-bold font-roboto' : 'text-white font-semibold font-roboto'
        }
    >
        {label}
    </NavLink>
);


const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white pt-16">
            <div className="container mx-auto p-8">
                <h1 className="text-2xl text-center font-bold mb-4 font-oswald">
                    Rashedul Hoque
                </h1>
                <div className="flex space-x-4 justify-center mb-4">
                    <NavItem to="/" label="Home" />
                    <NavItem to="/about" label="About" />
                    <NavItem to="/portfolio" label="Portfolio" />
                    <NavItem to="/contact" label="Contact" />
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


NavItem.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
};


export default Footer;