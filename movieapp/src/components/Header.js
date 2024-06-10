import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
    return (
        <div className='absolute z-10 flex w-[100vw] items-center justify-between px-6 bg-gradient-to-b from-black'>
            <img className='w-56' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='Logo'></img>
            <div className='flex items-center'>
                <IoIosArrowDropdown size="24px" color='white' />
                <h1 className='text-1g font-medium text-white'> Mern Stack   </h1>
                <div className='ml-4'>
                    <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
                    <button className='bg-red-800 text-white px-4 py-2 ml-2'>Watch Movie</button>
                </div>

            </div>
        </div>
    )
}

export default Header