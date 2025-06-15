import React, { useState } from 'react';
import '../App.css'
import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign, FaSearch } from 'react-icons/fa'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-calendars/styles/material.css';
function TextBoxTourPage() {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const toggleCalendar = () => setShowCalendar(!showCalendar);

    const handleDateChange = (e) => {
        setSelectedDate(e.value);
        setShowCalendar(false); // hide calendar after selecting
    };
    return (
        <>
            <div className='min-w-[800px] min-h-[150px] rounded-md bg-white border-b-2 mx-auto font-sans'>
                <div className='flex justify-between m-10'>
                    {/* location */}
                    <div className='flex flex-col'>
                        <div className='flex gap-3'>
                            <FaMapMarkerAlt className="text-orange-500 mt-1" /> <h1 className='font-semibold'>Location</h1>
                        </div>
                        <div><input className='rounded border-none' type="text" placeholder="Where you want to go?" />
                        </div>
                    </div>

                    {/* line */}
                    <div className='h-[80px] w-[3px] bg-gray-200 rounded  items-center'></div>

                    {/* chooes date */}


                    <div className="flex flex-col relative">
                        {/* Label Row */}
                        <div className="flex items-center gap-3 cursor-pointer" onClick={toggleCalendar}>
                            <FaCalendarAlt className="text-orange-500" />
                            <h1 className="font-semibold">Choose Date</h1>
                            <span className='text-gray-500'>▼</span>
                        </div>


                        {/* Display Selected Date */}
                        {selectedDate && (
                            <p className='mt-2 text-sm text-gray-600'>
                                Selected: {selectedDate.toLocaleDateString()}
                            </p>
                        )}

                        {/* Calendar Popup */}
                        {showCalendar && (
                            <div className='absolute top-full left-0 mt-2 z-50 bg-white shadow-lg'>
                                <CalendarComponent value={selectedDate} change={handleDateChange} />
                            </div>
                        )}
                    </div>



                    {/* line */}

                    <div className='h-[80px] w-[3px] bg-gray-200 rounded  items-center'></div>

                    {/* price range */}

                    <div className='flex flex-col'>
                        <div className='flex gap-3'>
                            <FaDollarSign className="text-orange-500 mt-1" /> <h1 className='font-semibold'>Price Range</h1>
                            <button className='bg-orange-500 text-white p-2 rounded -mt-1'><FaSearch /></button>
                        </div>
                        <div>
                            <select className='border-none text-sm text-gray-600' name="" id="">
                           <option className=' ' value="">Choose Here</option>
                            <option value="">$50-$200</option>
                            <option value="">$200-$400</option>
                            <option value="">$400-$500</option>
                            <option value="">$500-$750</option>
                            <option value="">$750-$1000</option>
                            <option value="">$1000 above</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextBoxTourPage