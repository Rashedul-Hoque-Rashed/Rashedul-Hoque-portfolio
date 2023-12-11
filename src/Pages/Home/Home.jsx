import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import Educations from "../../Components/Educations/Educations";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";


const Home = () => {
    return (
        <div>
           <Banner/> 
           <Skills/>
           <Projects/>
           <Educations/>
           <Contact/>
        </div>
    );
};

export default Home;