import React from 'react'
import { AiOutlineMail, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineStock } from 'react-icons/ai';
import { FaCity } from 'react-icons/fa';
import Icon from './Icon';

const Navbar = () => {
    return (
        <div className='bg-green-600'>
            <div className="pt-3 pb-5 px-4 flex gap-x-2 w-screen">
                <div className="relative flex-auto">
                    <input
                        className='telative px-9 text-sm w-full h-[30px] rounded-md border-spacing-1 focus:outline-none focus:border focus:border-green-500 focus:ring-1 focus:ring-green-500'
                        type="text"
                        placeholder='Cari di Bintang Store'
                    />
                    <button className='px-1 absolute left-0 border bg-slate-50 h-full rounded-tl-md rounded-bl-md'>
                        <AiOutlineSearch className='text-xl text-slate-400' />
                    </button>
                </div>
                <div className='flex gap-x-2'>
                    <button>
                        <AiOutlineShoppingCart className='text-xl text-white' />
                    </button>
                    <button>
                        <AiOutlineMail className='text-xl text-white' />
                    </button>
                    <button>
                        <AiOutlineMenu className='text-xl text-white' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
