import React from 'react'
import img1 from '../assets/tourdetailimg1.png'
import img2 from '../assets/tourdetailimg2.png'
import img3 from '../assets/tourdetailimg3.png'
import img4 from '../assets/tourdetailimg4.png'
function ImageRightSection() {
  return (
    
    <>
    <div>
<img className='w-[250px] h-[200px] rounded mt-4' src={img1} alt="img1" />
<img className='w-[250px] h-[200px] rounded mt-4' src={img2} alt="img1" />
    </div>
    <div>
<img className='w-[250px] h-[200px] rounded mt-4' src={img3} alt="img1" />
<img className='w-[250px] h-[200px] rounded mt-4' src={img4} alt="2r3t" />
    </div>
    </>
  )
}

export default ImageRightSection