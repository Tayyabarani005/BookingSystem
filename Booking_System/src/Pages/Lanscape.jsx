import React from 'react'
import Navbar from '../Components/Navbar'
import LandscapeRight from '../Components/LandscapeRight'
import LandscapeLeft from '../Components/LandscapeLeft'

function Lanscape() {
  return (
    <>
    <Navbar />
    <div className='flex justify-between'>
    <LandscapeLeft/>
    <LandscapeRight/>
    </div>
    </>
  )
}

export default Lanscape