import React from 'react'
import { FaEnvelope, FaFacebookF, FaTelegram, FaTwitter, FaTwitterSquare, FaVoicemail, FaXRay } from 'react-icons/fa';

function Contact() {
  return (
  
    <div className=' bg-slate-900'>

<div className=' flex lg:flex'><img className=' relative top-4 w-26 h-5' src="./img/oka.png" alt="" /> <span className=' text-gray-400 font-bold text-[30px]'>COMPANY</span> <span className=' text-blue-400'></span> </div>
<span className=' text-slate-300'>Elon Reeve Musk FRS is a businessman, conservative political activist, and investor known for his key roles in the space company SpaceX and the automotive company Tesla, Inc. Other involvements include ownership of X Corp., the company that operates the social media platform X (formerly known as Twitter)</span>


<div className=' lg:flex '>
      < span className=' text-white text-[20px] font-semibold'> <div className=' mt-6 pl-2 flex gap-5 lg:pl-6 lg:mt-14 lg:flex lg:gap-4 text-[]'>
     <div className=' flex text-center  '> <a href="https://x.com/elonmusk?s=21"><img className=' hover:-red-700 w-14 h-14 rounded-full border' src="./img/xx.jpg" alt=""/>
     </a> </div> <a href="https://t.me/Elon_muskprivatepage"><FaTelegram className=' hover:drop-shadow-lg hover:shadow-blue-100 rounded-[100px] bg-white  text-blue-500 text-[49px] w-14 h-14'/></a>

     </div> </span> 



      <div className=' pl-5 mt-3 lg:mt-12  lg:pl-[700px]'>
      <span className=' font-semibold text-[20px] text-gray-300'>Contact Management:</span> 
     <div className=' flex items-center  text-gray-300'><a href="mailto:companyapproval30@gmail.com"><img className=' w-10 lg:w-8 h-18 rounded-md' src="./img/open.jpg" alt="" /></a>
      <span className=' ml-2 mb-1'> Jared Birchall</span> </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
