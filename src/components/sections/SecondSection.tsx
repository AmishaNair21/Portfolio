import React from 'react'
import DynamicCard from '../cards/DynamicCard'

const SecondSection = () => {
  return (
    <div>
           <h1 className="text-center text-6xl 2xl:text-9xl drop-shadow-md mt-4  2xl:drop-shadow-xl text-[#FFE5E5] hero-heading font-bold">
        Portfolio Under Construction
      </h1>
      <div className="w-full h-full gap-7 p-4 items-center justify-center grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className='text-xl'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum similique maxime perspiciatis quasi, quae corrupti nihil tempora ad recusandae cupiditate facilis totam sunt non beatae delectus at. Quidem, sequi sapiente!
      </div>
       <DynamicCard
       image="/1.jpeg"
       title="Example Card"
       description="This is a dynamic card component."
       />
   
       <DynamicCard
       image="/2.jpeg"
       title="Example Card"
       description="This is a dynamic card component."
       />
         <div className='text-xl'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum similique maxime perspiciatis quasi, quae corrupti nihil tempora ad recusandae cupiditate facilis totam sunt non beatae delectus at. Quidem, sequi sapiente!
      </div>
  
      </div>
    </div>
  )
}

export default SecondSection