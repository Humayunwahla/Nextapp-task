import React from 'react'

function Navbar() {
  return (
    <div className='bg-white  w-full h-16 rounded-full shadow-2xl   '>
        <div className='flex flex-row text-center justify-between px-6 py-2 '>
            <div className='bg-indigo-600 h-12 w-12 text-center border-dashed border-2 border-white'><p className='text-white py-2'>Logo</p></div>
            <div className='text-center py-2'>
           <ul className='flex flex-row gap-8 '>
            <li><button className='bg-indigo-700 rounded-full text-center text-white w-24 h-10 '>Feedback</button></li>
           <li className='w-10 h-10 bg-gray-400 rounded-full justify-items-center text-white'>bell</li>
           <li className='w-10 h-10 bg-gray-400 rounded-full text-center text-white'>i</li>
           <li className='w-10 h-10 bg-gray-400 rounded-full text-center text-white'>pic</li>
           </ul>
            </div>
            
        </div>
        
    </div>
  )
}

export default Navbar