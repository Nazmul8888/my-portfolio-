import './services.css'

const Services = () => {
    return (
        <div>
          <div>
            <div>

            </div>
            <div>
                <h1>My skills</h1>
                <p>I'm Hashebur Rahman, a skilled MERN stack developer. With MongoDB, Express.js, React, and <br /> Node.js expertise, I've crafted dynamic web apps that captivate. From sleek interfaces to <br /> powerful backend systems, I deliver unique online experiences. let'sturn your ideas into <br /> exceptional digital realities.</p>
                <div >
                    <h6>HTML5</h6>
                    <progress className="progress progress-info w-56" value="70" max="100"></progress>
                </div>
                <div >
                    <h6>HTML5</h6>
                    <progress className="progress progress-success w-96" value="40" max="100"></progress>
                </div>
                <div >
                    <h6>HTML5</h6>
                    <progress className="progress progress-success w-96" value="40" max="100"></progress>
                </div>
                <div >
                    <h6>HTML5</h6>
                    <progress className="progress progress-success w-96" value="40" max="100"></progress>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Services;