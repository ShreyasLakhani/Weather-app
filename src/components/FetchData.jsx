import React from 'react'
import bgImage from '../assets/Cloud-background.png'
import { FaLocationDot } from "react-icons/fa6";

function FetchData({ handleClick, current, condition, formattedDate, search, setSearch }) {

    return (
        <div className='bg-[#1E213A] w-[30%] h-screen'>
            <div className='flex justify-center gap-5'>
                <input placeholder='Enter any place' type="text" className='font-semibold w-1/2 mt-10 outline-none pl-3 rounded-lg' onChange={e => setSearch(e.target.value)} />
                <button onClick={handleClick} className='bg-blue-400 text-white w-1/5 h-[5vh] rounded-lg mt-10 outline-none'>Search</button>
            </div>
            {(!current || !current.temp_c || !condition || !condition.text) ? (
                <p className='text-white h-[40vh] flex justify-center items-end'>No data found</p>
            ) : (
                <>
                    <div className='w-[120%] h-[45vh] relative'>
                        <img src={bgImage} alt="" className='mt-5 -ml-16' />
                        <img src={condition.icon} alt="" className='w-[35%] absolute top-[25%] left-1/4' />

                    </div>
                    <div className='text-white'>
                        <div className='flex justify-center mt-5 gap-2'>
                            <span className='text-6xl font-extralight'>{current.temp_c}</span>
                            <span className='flex items-end text-2xl text-gray-400 font-bold'>°C</span>
                        </div>
                        <div className='flex justify-center mt-5 text-md'>{condition.text}</div>
                        <div className='flex justify-center mt-2'>{formattedDate}</div>
                        <div className='flex items-center text-gray-400 justify-center mt-5 gap-2'><FaLocationDot /><p>{search}</p></div>
                    </div>
                </>
            )}

        </div>
    )
}

export default FetchData
