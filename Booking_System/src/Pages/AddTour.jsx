import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import LeftAddTour from '../Components/LeftAddTour.jsx'
import RightAddTour from '../Components/RightAddTour.jsx'
function AddTour() {
  return (
    <>
    <Navbar/>
    <div className='flex justify-between'>
        <LeftAddTour/>
        <RightAddTour/>
    </div>
    </>
  )
}

export default AddTour