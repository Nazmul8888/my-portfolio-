import './services.css'

const Services = () => {
    return (
        <div>
          <div className=' flex justify-evenly  items-center'>
            <div>
                <h1 className=' text-4xl font-mono '>EDUCATION & SKILLS</h1>
                <br />
                <ul className=' '>
                    <li>
                        <span className='less rounded font-mono'>Jan 2012 - Dec 2012</span>
                        <h6>Masters Of Business Administration </h6>
                        <p>Jagannath university</p>

                    </li>
                    <div className="divider divider-secondary"></div>
                    <br />
                  
                    <li>
                        <span className='less rounded font-mono'>July 2022 - Dec 2022</span>
                        <h6>Web Development </h6>
                        <p>Programming Hero</p>
                    </li>
                    <div className="divider divider-secondary"></div>
                    <br />
                    <li>
                        <span className='less rounded font-mono'>Jan 2023 - Present</span>
                        <h6>Web Developer</h6>
                        <p>ZETE Agency</p>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className=' text-4xl font-mono '>My skills</h1>
                <br />
                <p>I'm Nazmul <span className=' text-pink-500 font-bold text-xl'>Khan</span>, a skilled MERN stack developer. With MongoDB, Express.js, React, and <br /> Node.js expertise, I've crafted dynamic web apps that captivate. From sleek interfaces to <br /> powerful backend systems, I deliver unique online experiences. let'sturn your ideas into <br /> exceptional digital realities.</p>
                <br />
                <div >
                    <h6>HTML5</h6>
                    <progress className="progress progress-info w-96 bg-gray-400" value="90" max="100"></progress>
                </div>
                <br />
                <div >
                    <h6>CSS3</h6>
                    <progress className="progress progress-success w-96 bg-gray-400" value="85" max="100"></progress>
                </div>
                <br />
                <div >
                    <h6>Tailwind css</h6>
                    <progress className="progress progress-success w-96 bg-gray-400" value="70" max="100"></progress>
                </div>
                <br />
                <div >
                    <h6>Java Script</h6>
                    <progress className="progress progress-success w-96 bg-gray-400" value="60" max="100"></progress>
                </div>
                <br />
                <div >
                    <h6>React</h6>
                    <progress className="progress progress-success w-96 bg-gray-400" value="75" max="100"></progress>
                </div>
                <br />
                <div >
                    <h6>Node js</h6>
                    <progress className="progress progress-success bg-gray-400 w-96" value="80" max="100"></progress>
                </div>
                <br />
                <div >
                    <h6>Express js</h6>
                    <progress className="progress progress-success w-96 bg-gray-400" value="60" max="100"></progress>
                </div>
                <br />
                <div >
                    <h6>MongoDB</h6>
                    <progress className="progress progress-success w-96 bg-gray-400" value="70" max="100"></progress>
                </div>
                
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
    );
};

export default Services;