import React from 'react'

const SecondSection = () => {
  return (
    <div className='flex min-h-screen justify-center items-center'>
    <div className='grid grid-cols-2 border border-blue-500 min-h-screen w-full'>
      <div className='border border-green-500'>
        {/* left top */}
        <div className='border border-red-500 h-1/2 p-5'>
          <div className='border  border-purple-500 h-full bg-purple-500'>
          
          </div>
         
        </div>
        {/* left bottom */}
        <div className='border border-red-500 h-1/2 p-5'>
            <div className='border  border-purple-500 h-full bg-purple-500'>

          </div>
        </div>

      </div>
      <div className='border border-green-500'>
        {/* right top */}
         <div className='border border-red-500 h-1/2 p-5'>
          <div className='border  border-purple-500 h-full bg-purple-500'>
             
          </div>
        </div>
        {/* right bottom */}
        <div className='border border-red-500 h-1/2 p-5'>
      <div className='border  border-purple-500 h-full bg-purple-500'>

          </div>
        </div>

      </div>

    </div>
     

    </div>
  )
}

export default SecondSection