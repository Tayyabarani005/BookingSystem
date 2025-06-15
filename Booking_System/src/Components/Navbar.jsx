import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Navbar(hideExplore) {
  const navigate = useNavigate();
  return (
    <>
    <div className='flex justify-between items-center p-6 px-16 font-sans'>
        <div className='font-sevillana font-bold text-2xl'>
            Tour<span className='text-orange-600'>bay</span>
        </div>
        <div>
            <ul className='flex items-center gap-16 font-normal cursor-pointer'>
              <Link to='/'><li>Home</li></Link>
               <Link to="/addtour"><li>Add Tour</li></Link> 
                <li 
                onClick={()=>navigate('/tours')}
                >Tours</li>
               <Link to='/mytour'><li>My Tour</li></Link> 
               
            </ul>
        </div>
        {/* <div><button 
         onClick={() => navigate('/tour')}
        className='bg-orange-600 p-2 rounded-lg text-white font-medium hover:bg-orange-500'>Explore Now</button></div> */}
        {!hideExplore && (
        <div>
          <button
            className="bg-orange-600 p-2 rounded-lg text-white font-medium hover:bg-orange-500"
            onClick={() => navigate('/tour/')}
          >
            Explore Now
          </button>
        </div>
      )}
    </div>
    </>
  )
}

export default Navbar