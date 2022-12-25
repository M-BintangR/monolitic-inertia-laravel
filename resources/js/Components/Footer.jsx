import React from 'react'
import { AiOutlineCopyright } from 'react-icons/ai';


const Footer = ({ menus }) => {
    return (
        <footer className='mt-5'>

            <div className="px-4 py-3 border-y-[1px] border-slate-200">
                <h3 className='text-sm font-bold mb-3 md:text-xl md:font-bold md:text-green-600'>Mau Cari Apa di Bintang Store?</h3>
                <h3 className='hidden md:block text-3xl text-slate-900 font-bold mb-5'>Layanan Kami</h3>
                {menus.map((menu, i) => (
                    <p key={i} className='inline-block md:block text-xs md:text-lg text-slate-400 md:text-slate-700 mr-1'> {menu.title} <span className='md:hidden'>|</span></p>
                ))}
            </div>
            <div className="px-4 py-3 border-b-[1px] border-slate-200">
                <h3 className='hidden md:block text-3xl text-slate-900 font-bold mb-5'>Layanan Kami</h3>
                <p className='inline-block md:block text-xs md:text-lg text-slate-400 md:text-slate-700 mr-1'>Bintang Store Care <span className='md:hidden'>|</span></p>
                <p className='inline-block md:block text-xs md:text-lg text-slate-400 md:text-slate-700 mr-1'>Syarat & Ketentuan <span className='md:hidden'>|</span></p>
                <p className='inline-block md:block text-xs md:text-lg text-slate-400 md:text-slate-700 mr-1'>Kebijakan Privasi <span className='md:hidden'>|</span></p>
            </div>
            <div className="px-4 py-3 border-b-[1px] border-slate-200">
                <p className='inline-block text-xs text-slate-400 mr-1'>
                    <AiOutlineCopyright className='inline-block mr-1' />
                    <span>Bintang Store</span>
                </p>
                <p className='float-right inline-block text-xs text-slate-400'>
                    By Muhammad Bintang
                </p>
            </div>
        </footer>
    )
}

export default Footer
