import React from 'react'
import { useNavigate } from 'react-router-dom';

function LandscapeLeft() {
    const navigate = useNavigate();
  return (
    <div className='p-6 px-16 font-sans '>
        <h1 className='font-bold mt-10 text-5xl'>Explore The New World <br className='mt-14'/>With Tourbay</h1>
        <p className='mt-10 text-2xl'>No matter where in the world you can go,<br/> we can help get you there and make your tour a <br/>stupendous memory.</p>
         <div 
          onClick={() => navigate('/tour')}
         className='mt-10'><button className='bg-orange-600 p-2 rounded-lg text-white font-medium hover:bg-orange-500'>Explore Now</button></div>
    </div>
  )
}

export default LandscapeLeft