import React from 'react'
import ImagesLeftSection from './ImagesLeftSection'
import ImageRightSection from './ImageRightSection'
import {FaDollarSign,FaClock} from 'react-icons/fa'

function ImagesSection() {
  return (
    <>
    <h1 className='font-bold text-4xl ml-5'>Parez Art Museum Miami</h1>
    <div className='flex gap-6'>
    <div className='flex gap-2 ml-1'>
    <FaDollarSign className='text-gray-500 mt-1 ml-4'/><h1 className='text-gray-500'>$150-$300</h1>
       </div>
       <div className='flex gap-2 mr-2'>
        <FaClock className='text-gray-500 mt-1'/><h1 className='text-gray-500'>3 Days</h1>
       </div>
    </div>
    <div className='flex gap-10 ml-5'>
        <ImagesLeftSection/>
        <ImageRightSection/>
    </div>
    </>
  )
}

export default ImagesSection