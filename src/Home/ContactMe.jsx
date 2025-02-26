
import { Link } from 'react-router-dom';
import './contact.css'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const ContactMe = () => {

   useEffect(() => {
            AOS.init({ duration: 1000 });
          }, []);

    return (
<div id="contact" className='mt-20'>
  <h1 className="text-6xl text-center font-bold bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text" 
      data-aos="fade-up"> Contact Me </h1>

  <div className="flex justify-center py-16" data-aos="fade-up">
    <div className="flex flex-col lg:flex-row bg-white relative shadow-lg rounded-lg overflow-hidden">
      
      {/* Left Side - Contact Info */}
      <div className="p-8 relative flex flex-col justify-center text-gray-800" data-aos="fade-right">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="mt-2">Feel free to reach out! I'm open to collaboration and always happy to chat.</p>
        
        <div className="mt-4 space-y-3">
          <p>📍 558 Rokeya Mansion, 4th Floor, Nazir Road, Feni, Bangladesh</p>
          <p>📧 sharminsharker9@gmail.com</p>
          <p>📞 +8801732733979</p>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex space-x-4" data-aos="zoom-in">
          <a href="#" className="bg-blue-600 text-white p-3 rounded-full"><FaFacebook color="white" size={20} /></a>
          <a href="#" className="bg-blue-500 text-white p-3 rounded-full"><FaLinkedin color="white" size={20} /></a>
          <a href="#" className="bg-gray-800 text-white p-3 rounded-full"><FaGithub color="white" size={20} /></a>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 relative" data-aos="fade-left">
        <h2 className="text-3xl text-center font-bold">Contact Us</h2>
        
        <form className="mt-4 space-y-4 text-white">
          <input type="text" placeholder="Full Name" className="w-full bg-transparent border-2 p-3 rounded-full text-white placeholder-white" />
          <input type="email" placeholder="Email Address" className="w-full bg-transparent border-2 p-3 rounded-full text-white placeholder-white" />
          <textarea placeholder="Message" className="w-full bg-transparent border-2 p-3 rounded-lg text-white placeholder-white"></textarea>
          <button className="w-full bg-white text-cyan-500 py-3 font-bold rounded-full">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</div>

    );
  };
  
  export default ContactMe;
  
