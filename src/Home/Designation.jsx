import Lottie from "lottie-react";
import lottieImg from '../assets/lottie.json'
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Designation = () => {
    return (
        <div className="flex justify-between items-center mt-7">
            <div>
                <h1 className="text-6xl font-bold">Frontend </h1>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text">Developer</h1>
                <p className="text-xl font-medium  mt-2">Crafting Innovative, Functional, and User-Friendly Websites <br /> for Seamless Digital Solutions.</p>
                <button className="text-white font-bold px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 mt-4">Resume</button>
                <div>
<Link><FaGithub /></Link>
                </div>
            </div>
            <div className="h-[450px] w-[450px]">
<Lottie animationData={lottieImg}></Lottie>
            </div>
        </div>
    );
};

export default Designation;