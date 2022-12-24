import React, { useEffect, useState } from 'react'
import { AiOutlineMail, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineStock } from 'react-icons/ai';

const Navbar = ({ onOpen }) => {
    const [navScroll, setNavScroll] = useState(false);

    window.addEventListener('scroll', () => {
        const windowHeight = window.scrollY;
        if (windowHeight > 150) {
            setNavScroll(true);
        } else {
            setNavScroll(false);
        }
    })

    return (
        <nav className={`duration-300 ${navScroll === true ? 'bg-white drop-shadow-md' : 'bg-green-600 md:bg-white'} sticky top-0 right-0 left-0 z-50`}>
            <div className="hidden md:flex bg-slate-200 justify-end gap-4 tracking-tight text-sm py-1.5 px-10">
                <p>Tentang Bintang Store</p>
                <p>Mitra Bintang Store</p>
                <p>Mulai Berjualan</p>
                <p>Promo</p>
            </div>
            <div className="pt-3 pb-5 md:pb-2 px-4 flex gap-x-2 w-screen md:w-full">
                <div className="hidden md:block">
                    <h3 className='md:text-xl lg:text-3xl text-green-600 font-bold'>Bintang Store</h3>
                </div>
                <div className='hidden md:block mx-3'>
                    <button className='py-0.5 px-1 duration-300 text-md text-slate-500 hover:bg-slate-300 hover:text-green-600'>Kategori</button>
                </div>
                <div className="relative flex-auto md:mx-3">
                    <div className='md:relative'>
                        <input
                            className='telative px-9 text-sm w-full h-[30px] md:h-[40px] rounded-md border-spacing-1 focus:outline-none focus:border focus:border-green-500 focus:ring-1 focus:ring-green-500'
                            type="text"
                            placeholder='Cari di Bintang Store'
                        />
                        <button className='px-1 absolute left-0 md:left-auto md:right-0 border bg-slate-50 h-full md:h-full rounded-tl-md rounded-bl-md md:rounded-none md:rounded-tr-md md:rounded-br-md  border-green-600'>
                            <AiOutlineSearch className='text-xl text-slate-400' />
                        </button>
                    </div>
                    <div className="hidden md:flex justify-start gap-4 tracking-tight text-md mt-2 text-slate-500">
                        <p>Termurah</p>
                        <p>Terlaris</p>
                        <p>Fashion</p>
                        <p>Makanan</p>
                        <p>Ternding</p>
                    </div>
                </div>
                <div className={`flex gap-x-2 ${navScroll === true ? 'text-black' : 'text-white '} md:text-slate-600 md:items-start mt-2`}>
                    <button className='md:mr-3'>
                        <AiOutlineShoppingCart className='text-xl' />
                    </button>
                    <button className='md:hidden'>
                        <AiOutlineMail className='text-xl' />
                    </button>
                    <button onClick={() => onOpen()} className='md:hidden'>
                        <AiOutlineMenu className='text-xl' />
                    </button>
                </div>
                <div className="hidden md:block border border-r-1 border-slate-300 mr-3 h-9"></div>
                <div className="hidden md:flex gap-x-2 mx-3 md:items-start">
                    <button className='text-md font-bold text-green-600 border border-spacing-11 border-green-600 py-1.5 px-4 rounded-lg'>Masuk</button>
                    <button className='text-md font-bold text-white border border-spacing-11 border-green-600 bg-green-600 py-1.5 px-4 rounded-lg'>Daftar</button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
