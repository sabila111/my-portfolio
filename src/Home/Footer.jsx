
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
     <div className="border-gray-500 border-t ">
           <footer className="footer  max-w-7xl mx-auto text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
   
    <p>© {new Date().getFullYear()} - All right reserved by Sharmin Sharker</p>
  </aside>
  <nav className=" grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <div className="flex gap-12  text-2xl text-white">
<Link to={'https://github.com/sabila111'}><FaGithub size={30}  /></Link>

<div style={{
  backgroundColor: 'white', 
 
  borderRadius: '50%', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center'
}}>
<Link to={'https://www.facebook.com/sharmin.sabila.520'}><FaFacebook  color="#1877F2" size={30}  /></Link>
</div>

<div style={{
  backgroundColor: 'white', 
  width: '27px', 
  height: '27px', 
  borderRadius: '10%', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center'
}}>
<Link to={'https://www.linkedin.com/in/sharmin-sharker-443865231/'}><FaLinkedin  color="#0077B5" size={35} /></Link>
</div>
                </div>
  </nav>
</footer>
     </div>
     
    );
};

export default Footer;