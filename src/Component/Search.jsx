import React from 'react'




function Search() {
  return (

    <div className=' mt-5'>
       <div><img src="./img/oka.png" alt="" /></div>
    <div className=' lg:mt-16 mt-8 lg:flex text-white '>
 
   
      <div className=' lg:flex lg:flex-none p-2 md:p-4  gap-0  flex flex-col'>
        <span className=' text-[20px]'>
          Hello
        </span>
      
        <span className=' text-[24px] md:text-[37px] lg:text-[38px] font-semibold'> I'm  <span className='text-yellow-300'>Elon Musk</span> </span>
        <span className=' text-[25px] md:text-[37px] lg:text-[40px] font-semibold'>
         Founder Of The Tesla Company
        </span>
        <span className=' md:text'>I found and leads Tesla,Space X, Neuralink</span>
        <span className=' md:text'>and the Boring Company </span>
        
      </div>
      
      <img className='  p-10 md:pl-[10cm] md:h-[11cm] md:w-[31cm] md:p-22 lg:p-22 lg:pl-[4cm] lg:h-[13cm] h-[8cm]  ' src="./img/ppo.png" alt="" />
 
    </div>
    </div>
  )
}

export default Search
