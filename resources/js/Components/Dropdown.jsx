import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export const DropdownNav = ({ onClose, isVisible }) => {
    return (
        <div>
            <div className={`flex ${isVisible ? 'block' : 'hidden'} md:hidden flex-col fixed top-0 bottom-0 right-0 left-0 bg-white z-[9999]`}>
                <div className="sticky mb-3 py-1 px-3">
                    <button onClick={() => onClose()} className='text-slate-500 '>
                        <AiOutlineClose className='inline-block mr-3' />
                    </button>
                    <h3 className='text-base font-bold inline-block'>Menu Utama</h3>
                </div>
                <div className="flex flex-col px-3 overflow-y-auto vh-100">
                    <div className="mt-3 my-4">
                        <div className="grid grid-cols-2 gap-2">
                            <button className='px-2 border border-green-600 rounded-md bg-green-600 text-white font-bold'>Masuk</button>
                            <button className='px-2 border border-green-600 rounded-md text-green-600 font-bold'>Daftar</button>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col gap-y-6">
                        <div className='border-b-2 border-slate-300 py-3'>
                            <h3 className='text-base font-bold'>Aktifitas Saya</h3>
                            <div className="text-sm tracking-tight">
                                <p>Daftar Transaksi</p>
                                <p>Whislist</p>
                                <p>Ulasan</p>
                                <p>Toko Favorit</p>
                            </div>
                        </div>
                        <div className='border-b-2 border-slate-300 py-3'>
                            <h3 className='text-base font-bold'>Aktifitas Saya</h3>
                            <div className="text-sm tracking-tight">
                                <p>Daftar Transaksi</p>
                                <p>Whislist</p>
                                <p>Ulasan</p>
                                <p>Toko Favorit</p>
                            </div>
                        </div>
                        <div className='border-b-2 border-slate-300 py-3'>
                            <h3 className='text-base font-bold'>Aktifitas Saya</h3>
                            <div className="text-sm tracking-tight">
                                <p>Daftar Transaksi</p>
                                <p>Whislist</p>
                                <p>Ulasan</p>
                                <p>Toko Favorit</p>
                            </div>
                        </div>
                        <div className='border-b-2 border-slate-300 py-3'>
                            <h3 className='text-base font-bold'>Aktifitas Saya</h3>
                            <div className="text-sm tracking-tight">
                                <p>Daftar Transaksi</p>
                                <p>Whislist</p>
                                <p>Ulasan</p>
                                <p>Toko Favorit</p>
                            </div>
                        </div>
                        <div className='border-b-2 border-slate-300 py-3'>
                            <h3 className='text-base font-bold'>Aktifitas Saya</h3>
                            <div className="text-sm tracking-tight">
                                <p>Daftar Transaksi</p>
                                <p>Whislist</p>
                                <p>Ulasan</p>
                                <p>Toko Favorit</p>
                            </div>
                        </div>
                        <div className='border-b-2 border-slate-300 py-3'>
                            <h3 className='text-base font-bold'>Aktifitas Saya</h3>
                            <div className="text-sm tracking-tight">
                                <p>Daftar Transaksi</p>
                                <p>Whislist</p>
                                <p>Ulasan</p>
                                <p>Toko Favorit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

