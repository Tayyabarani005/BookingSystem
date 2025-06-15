import React from 'react'

function TourdetailcardComponent({day,weather}) {
  return (
    <>
    <div className='w-[400px] h-[210px] rounded-lg border'>
        <div className='flex justify-between p-6'>
<h1 className='font-bold'>{day}</h1>
<h1 className='font-bold'>{weather}</h1></div>

<ul className='list-disc list-inside p-6'>
    <li>Tour with American Sign Language</li>
    <li>Audio Description group tour</li>
    <li>Large Print Gallery notes</li>
    <li>Lunch Included</li>
</ul>
    </div>
    </>
  )
}

export default TourdetailcardComponent