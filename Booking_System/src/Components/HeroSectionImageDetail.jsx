import React from 'react'
import TourdetailcardComponent from './TourdetailcardComponent'

function HeroSectionImageDetail() {
  return (
    <>
    <div className='mt-5 ml-5 font-sans'>
<p className='text-center mt-3 '>The Parez Art Museum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nobis saepe quibusdam! Tempore, esse illum nam, autem consequuntur minima nulla perspiciatis repellendus obcaecati modi iusto excepturi facere eaque quia reiciendis.</p>

<p className='text-center mt-3 '>The Parez Art Museum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nobis saepe quibusdam! Tempore, esse illum nam, autem consequuntur minima nulla perspiciatis repellendus obcaecati modi iusto excepturi facere eaque quia reiciendis.</p>

<p className='text-center mt-3 '>The Parez Art Museum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nobis saepe quibusdam! Tempore, esse illum nam, autem consequuntur minima nulla perspiciatis repellendus obcaecati modi iusto excepturi facere eaque quia reiciendis.</p>
    </div>

    <h1 className='font-bold text-3xl ml-5 mt-5 '>What's Included</h1>
    <div className='ml-8 mt-4'>
    <div className='flex gap-56 mt-10'><h1>Destination</h1><p>Miami</p></div>
    <div className='flex gap-40 mt-10'><h1>Departure Location</h1><p>2000 Brush St, Detroit, MI 48226, United States</p></div>
    <div className='flex gap-64 mt-10'><h1>Return</h1><p>7:00 pm on Day 3</p></div>
    <div className='flex gap-64 mt-10'><h1>Return</h1><p>Basic Necessities</p></div></div>



    <div>

        <h1 className='text-3xl font-bold ml-5 mt-5'>Itenary Schedule</h1>

        <div className='ml-5 mt-5 flex gap-3'>
    <TourdetailcardComponent day='Day 1' weather='18C'/>
    <TourdetailcardComponent day='Day 2 ' weather='15C'/>
    <TourdetailcardComponent day='Day 3 ' weather='18C'/>

</div>


<div className='flex justify-center mt-10'>

        <button
            className="bg-orange-600 p-2 rounded-lg text-center flex justify-center text-white font-medium items-center hover:bg-orange-500"
          >
            Book Now
          </button>
          </div>
    </div>
    </>
    
  )
}

export default HeroSectionImageDetail