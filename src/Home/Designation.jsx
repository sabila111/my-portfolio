import Lottie from "lottie-react";
import lottieImg from '../assets/lottie.json'
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Designation = () => {

  useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="flex justify-between items-center mt-7">
            <div>
                <h1 className="text-7xl font-bold">Frontend </h1>
                <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text">Developer</h1>
                <p className="text-xl font-medium  mt-4">Crafting Innovative, Functional, and User-Friendly Websites <br /> for Seamless Digital Solutions.</p>
                <button className="text-white font-bold px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 mt-6">Resume</button>

                <div className="flex gap-12 mt-6 text-2xl text-white" data-aos="fade-right">
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
            </div>
            <div className="h-[450px] w-[450px]">
<Lottie animationData={lottieImg}></Lottie>
            </div>
        </div>
    );
};

export default Designation;