import React from 'react'




const Card = ({content,title,Icon}) => {
   
  return (
<div className='flex justify-between  flex-col px-10 py-12 rounded-[20px] max-w-[370px] outline outline-offset-2 outline-gradient hover:scale-105 cursor-pointer md:mr-10 sm:mr-5 mr-0 my-5 gap-2 '>
{Icon}

  <h1 className='text-white font-poppins font-semibold text-[20px]'>{title}</h1>
  <p className='font-poppins font-normal text-[16px] leading-[32px] text-white'>{content}</p>

</div>

  )
}

export default Card