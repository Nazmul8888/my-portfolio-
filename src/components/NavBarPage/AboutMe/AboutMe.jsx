import './about.css'

const AboutMe = () => {
    return (
        <div>
            <div className=" flex justify-evenly items-center">
                <div>
                    <img className=" w-[560px] mb-32" src="https://i.ibb.co/4NvVt7x/Whats-App-Image-2023-12-23-at-13-06-58-1-removebg-preview.png" alt="" />
                </div>
                <div>
                    <h1 className=" text-2xl font-bold text-green-500  font-mono">ABOUT ME.</h1>
                    <hr />
                    <br />
                    <h2 className=" text-xl font-mono ">Im a Nazmul Khan MERN stack <br /> Developer with over 2 years of <br /> experience.</h2>
                    <br />
                    <p className=" font-mono ">Im Nazmul Khan, a skilled MERN stack developer. With MongoDB, <br /> Express.js, React, and Node.js expertise, Ive crafted dynamic web apps <br /> that captivate. From sleek interfaces to powerful backend systems, I <br /> deliver unique online experiences. lets turn your ideas into exceptional <br /> digital realities.</p>
                    <br />
                    <div className=" flex justify-center gap-10  mr-56">
                <div className=" flex">
                <h1 className=" font-mono text-6xl font-bold  text-[#FC6736]"> 30+ </h1> 
                <p className="  font-bold  mt-2 ml-4 ">Project <br /> completed</p>
                </div>
                <div className=" flex">
                <h1 className=" font-mono text-6xl font-bold text-[#FC6736]"> 20+ </h1> 
                <p className="  font-bold  mt-2 ml-4">Satisfied <br /> Client</p>
                
                </div>
                <div > 
                 </div>
                </div>
            </div>
            </div>
            
           <br />
        </div>
    );
};

export default AboutMe;