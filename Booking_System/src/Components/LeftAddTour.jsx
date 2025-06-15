import React from 'react'

function LeftAddTour() {
  return (
    <>
      <div className='font-sans m-10'>
        <h1 className='font-bold text-3xl'>Confirm Your Booking</h1>
        <option className='mt-6 text-gray-500' value="">Name</option>
        <input className='w-full rounded-lg p-1 border' type="numbers" placeholder='Enter your name' />
        <option className='mt-4 text-gray-500' value="">Email</option>
        <input className='w-full rounded-lg p-1 border' type="numbers" placeholder='' />
        <option className='mt-4 text-gray-500 ' value="">Phone</option>
        <input className='w-full rounded-lg p-1 border' type="numbers" placeholder='' />
        <div className='flex justify-between gap-2'>
          <div><option className='mt-4 text-gray-500 ' value="">No of Adults</option>
            <input className='w-full rounded-lg p-1 border' type="numbers" placeholder='' /></div>
          <div><option className='mt-4 text-gray-500 ' value="">No of Childrens</option>
            <input className='w-full rounded-lg p-1 border' type="numbers" placeholder='' /></div>
        </div>
        <option className='mt-4 text-gray-500 ' value="">Payment Method</option>
        <select className='w-full rounded-lg p-1' name="Select" id="" placeholder='Select'>
          <option className='text-gray-500' value="">Select</option>
          <option value="Easy-Paisa">Easy-Paisa</option>
          <option value="Account no">Account no</option>
        </select>
         <button
            className="mt-6 bg-orange-600 p-1 w-full rounded-lg text-white font-medium hover:bg-orange-500"
           type="submit"
          >
            Submit
          </button>
      </div>
    </>
  )
}

export default LeftAddTour