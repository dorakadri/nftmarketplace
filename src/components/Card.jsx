import React from 'react'


const Card = ({content,title,icon}) => {
    console.log(content,title,icon)
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ' >
  
      <img src={icon} alt="quotes"
       className='w-[100px] h-[82px] '
      />
  
 
    <p className='font-poppins font-normal text-[16px] leading-[32px] text-white '>{content}</p>
    
   
    </div>
  )
}

export default Card