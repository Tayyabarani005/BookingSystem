import React from 'react'
import Navbar from '../Components/Navbar'
import bgImage from '../assets/bgimagetourpage.png'
import TextBoxTourPage from '../Components/TextBoxTourPage'
import PopularSearchTourPage from '../Components/PopularSearchTourPage'

function TourPage() {
  return (
    <>
    <div className="relative h-[80vh] w-full overflow-hidden">
     
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar hideExplore={true} />
      </div>

     
      
        <img
          src={bgImage}
          alt="Tour Background"
          className="h-full w-full object-cover"
        />
         
         </div>
         <div className='relative z-20 -mt-16 flex justify-center'><TextBoxTourPage/></div>
       <div className='flex justify-center'><PopularSearchTourPage /></div>  
     </>
  )
}

export default TourPage



