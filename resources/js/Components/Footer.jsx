import React from 'react'
import { AiOutlineCopyright } from 'react-icons/ai';


const Footer = ({ menus }) => {
    return (
        <footer className='mt-5'>
            <div className="px-4 py-3 border-y-[1px] border-slate-200">
                <h3 className='text-sm font-bold'>Mau Cari Apa di Bintang Store?</h3>
                {menus.map((menu, i) => (
                    <p key={i} className='inline-block text-xs text-slate-400 mr-1'> {menu.title} | </p>
                ))}
            </div>
            <div className="px-4 py-3 border-b-[1px] border-slate-200">
                <p className='inline-block text-xs text-slate-400 mr-1'>Bintang Store Care |</p>
                <p className='inline-block text-xs text-slate-400 mr-1'>Syarat & Ketentuan |</p>
                <p className='inline-block text-xs text-slate-400 mr-1'>Kebijakan Privasi |</p>
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
