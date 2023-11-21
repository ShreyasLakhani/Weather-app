import React from 'react'
import { BiSolidNavigation } from "react-icons/bi";
import { ProgressBar } from 'primereact/progressbar';
import 'react-loading-skeleton/dist/skeleton.css'

function Highlight({ current }) {
  return (
    <div className='bg-[#100E1D] w-[70%] text-white'>
      <div className='text-4xl mt-10 flex justify-center'>Today's Highlights</div>
      {(!current || !current.wind_mph || !current.wind_dir || !current.humidity || !current.vis_miles || !current.pressure_in) ? (
        <p className='h-[50vh] text-3xl flex justify-center items-center mt-20'>No data found</p>
      ) : (
        <div className='flex flex-col justify-center gap-10 h-[70vh] mt-16'>
          <div className='flex justify-around'>
            <div className='bg-[#1E213A] gap-3 flex flex-col justify-center w-[30%] h-[20vh] items-center py-3'>
              <div className='font-light'>Wind Status</div>
              <div className='flex gap-1'><p className='text-5xl font-semibold'>{current.wind_mph}</p><p className='flex items-end '>mph</p></div>
              <div className='flex gap-1'><BiSolidNavigation className='text-sky-400' /><p className='text-xs'>{current.wind_dir}</p></div>
            </div>
            <div className='bg-[#1E213A] gap-3 flex flex-col justify-center w-[30%] h-[20vh] items-center py-3'>
              <div>Humidity</div>
              <div className='flex gap-1'><p className='text-5xl font-semibold'>{current.humidity}</p> <p className='flex items-end'>%</p> </div>
              <ProgressBar className='border w-[80%] h-[15px]' pt={{
                value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', fontSize: '10px' } }
              }} value={current.humidity} />
            </div>
          </div>
          <div className='flex justify-around'>
            <div className='bg-[#1E213A] gap-3 flex flex-col justify-center w-[30%] h-[20vh] items-center py-3'>
              <div>Visibility</div>
              <div className='flex gap-1'><p className='text-5xl font-semibold'>{current.vis_miles}</p> <p className='flex items-end'>miles</p></div>
            </div>
            <div className='bg-[#1E213A] gap-3 flex flex-col justify-center w-[30%] h-[20vh] items-center py-3'>
              <div>Air Pressure</div>
              <div className='flex gap-1'><p className='text-5xl font-semibold'>{current.pressure_in}</p> <p className='flex items-end'>mb</p></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Highlight