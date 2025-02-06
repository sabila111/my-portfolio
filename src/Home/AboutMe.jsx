const AboutMe = () => {
    return (
        <div id="about" className="mt-10">
          
            <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text">
                About Me
            </h1>

          
            <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-10 mt-10">
                {/* Text Section */}
                <div className="lg:w-1/2">
                    <h1 className="text-5xl font-bold">Hello, I'm</h1>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text">
                        Sharmin Sharker
                    </h1>
                    <p className="text-xl mt-4">
                        I’m currently studying <strong>Botany</strong>, but my passion for <strong>web development</strong> has led me in a new direction. 
                        I love creating user-friendly websites and solving problems through code. My goal is to build a career as a web developer.
                        <br />
                        Beyond coding, I enjoy <strong>gardening, cooking, reading books, and traveling</strong>. Exploring new ideas, whether in nature or technology, excites me. 
                        I’m always eager to learn and grow in this journey. 🚀
                    </p>
                </div>

              
                <div className="flex justify-center">
                    <img className="h-80 w-80 rounded-full object-cover" src="https://i.ibb.co.com/yF1YnqWB/1738753547327.jpg" alt="Sharmin Sharker" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
