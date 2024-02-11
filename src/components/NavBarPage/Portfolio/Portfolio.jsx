import './portfilo.css'
import { FaGithub } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
        <h1 className=' text-2xl text- white font-bold ml-44  '>MY PORTFOLIO.</h1>
        <br />
       <div className=' flex justify-center  gap-10 ' >
        <div>
        <iframe width="500"
                height="400"  
                overflow= "scroll" 
                border= "10px"
                src="https://dev-hasahebur.vercel.app/static/img/chef%20recipe.png" >

        </iframe>
        <br />
        <h1 className=' text-2xl font-bold'>chef Recipe Hunter</h1>
        <br />
     <div className=' flex gap-1'>
        <Link>
        <div>
        <span className='nan'>   < FaGithub /></span>
        
        </div>
        </Link>
       <Link>
       <div>
        <span className='nan'><FaPaperclip /></span>
        <a title='Live Link' href="https://chef-recipe-hunter1.web.app/"></a>
        </div>
       </Link>
        <div>
      <Link>
      <span className='nan'><FaRegShareSquare /></span>
      </Link>
        </div>
     </div>
        <br />
        </div>
       
        <div>
        <iframe width="500"
                height="400"   
                src="https://dev-hasahebur.vercel.app/static/img/toy-car.png" >

        </iframe>
        <br />
        <h1 className=' text-2xl font-bold'>Kidz toy Car E-commerce</h1>
        <br />
        <div className=' flex gap-1'>
        <Link>
        <div>
        <span className='nan'>   < FaGithub /></span>
        
        </div>
        </Link>
       <Link>
       <div>
        <span className='nan'><FaPaperclip /></span>
        <a title='Live Link' href="https://chef-recipe-hunter1.web.app/"></a>
        </div>
       </Link>
        <div>
      <Link>
      <span className='nan'><FaRegShareSquare /></span>
      </Link>
        </div>
     </div>
        
        
        </div>
        <div>
        <iframe width="500"
                height="400"   
                src="https://dev-hasahebur.vercel.app/static/img/fineSweet.png" >

        </iframe>
        <br />
        <h1 className=' text-2xl font-bold'>Fine Sweet Project</h1>
        <br />
        <div className=' flex gap-1'>
        <Link>
        <div>
        <span className='nan'>   < FaGithub /></span>
        
        </div>
        </Link>
       <Link>
       <div>
        <span className='nan'><FaPaperclip /></span>
        <a title='Live Link' href="https://chef-recipe-hunter1.web.app/"></a>
        </div>
       </Link>
        <div>
      <Link>
      <span className='nan'><FaRegShareSquare /></span>
      </Link>
        </div>
     </div>
        </div>
        
       </div>
       </div>
       
    );
};

export default Portfolio;