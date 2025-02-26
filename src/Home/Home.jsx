import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Designation from "./Designation";
import Projects from "./Projects";
import Skill from "./Skill";

const Home = () => {
    return (
        <div>
            <Designation></Designation>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Skill></Skill>
            
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;