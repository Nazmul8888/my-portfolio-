

const Banner = () => {

    const handleDownload = () => {
        // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
        const downloadLink = document.createElement('a');
        downloadLink.href = 'path/to/your/cv.pdf';
        downloadLink.download = 'your_cv.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };
    return (
        <div>
            <div className=" flex justify-evenly items-center">
                <div>
                    <h2 className=" font-bold text-xl">Hello, I am</h2>
                    <h1 className=" text-6xl font-bold">Nazmul <br /> khan</h1>
                    <br />
                    <p>I design and develop services for customers of all sizes, <br /> specializing in creating stylish, modern websites, web <br /> services and online stores.</p>

                </div>
                <div>
                    <img className=" w-[470px] rounded-full bg-[#20c997]" src="https://i.ibb.co/4NvVt7x/Whats-App-Image-2023-12-23-at-13-06-58-1-removebg-preview.png" alt="" />
                </div>
            </div>

            <div className=" flex justify-center mr-[970px] px-btn.px-btn-theme">
            
             <button className="  mb-48 bg-lime-300 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2" onClick={handleDownload}>Download CV</button>
             
            </div>
            
        </div>
    );
};

export default Banner;