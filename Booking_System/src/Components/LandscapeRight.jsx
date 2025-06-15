import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

function LandscapeRight() {
    return (
        <div>
            <div className='top-0 right-0 absolute bg-orange-100 h-[600px] w-[550px] -z-10 clip-diagonal scale-x-[-1]'> </div>
            <div className='flex gap-5'>
                <div> <img className='h-[340px] w-[250px] rounded-lg mt-36' src={img1} alt="" /></div>

                <div className='mt-36 mr-6'>
                    <img className='h-[165px] w-[200px] rounded-lg ' src={img2} alt="" />
                    <img className='h-[166px] w-[200px] mt-3 rounded-lg ' src={img3} alt="" /></div>
            </div></div>

    )
}

export default LandscapeRight