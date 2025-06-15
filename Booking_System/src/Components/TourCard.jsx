import React from 'react'
import {FaDollarSign,FaClock} from 'react-icons/fa'
 import { FaTrash, FaEdit } from 'react-icons/fa';
 import { useNavigate } from 'react-router-dom';
function TourCard({image,heading,para,money,day,id,showActions = false}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tours/${id}`);
  };
  return (
   <>
   <div
   onClick={handleClick}
   className='relative max-w-[350px] max-h-[350px] border-b-2 border-t-2 border-l-2 border-r-2 cursor-pointer rounded m-3 hover:shadow-xl group transition duration-300'>
      <img className='h-[200px] w-[350px] rounded' src={image} alt="" />
<h1 className='font-bold p-2'>{heading}</h1>
<p className='text-sm p-2 text-gray-500'>{para}</p>

<div className='flex gap-6'>
<div className='flex gap-2 ml-1'>
<FaDollarSign className='text-gray-500 mt-1'/><h1 className='text-gray-500'>{money}</h1>
   </div>
   <div className='flex gap-2 mr-2'>
    <FaClock className='text-gray-500 mt-1'/><h1 className='text-gray-500'>{day}</h1>
   </div>
</div>


      {showActions && (
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 hidden group-hover:flex gap-3 mt-2">
            <button className="flex items-center gap-1 text-orange-600 border border-orange-600 px-2 py-1 rounded hover:bg-orange-600 hover:text-white text-sm">
              <FaTrash /> Delete
            </button>
            <button className="flex items-center gap-1 border border-gray-400 px-2 py-1 rounded text-gray-400 text-sm cursor-not-allowed">
              <FaEdit /> Update
            </button>
          </div>
        )}

   </div>
   
   </>
  )
}

export default TourCard
