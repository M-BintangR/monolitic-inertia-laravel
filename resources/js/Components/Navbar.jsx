import React from 'react'

const Navbar = () => {
    const navbarOne = [
        { judul: 'Tentang Bintang Store' },
        { judul: 'Mitra Bintang Store' },
        { judul: 'Mulai Berjualan' },
        { judul: 'Promo' },
    ];

    return (
        <nav className='fixed top-0 left-0 right-0 mb-10'>
            <div className="w-full">
                <div className="bg-slate-100 px-14 py-2 tracking-tighter drop-shadow-sm">
                    <ul className='flex justify-end gap-5 text-sm font-semiboldm text-slate-700'>
                        {navbarOne.map((nav, i) => (
                            <li
                                key={i}
                                className="hover:text-green-600 cursor-pointer"
                            >
                                {nav.judul}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white shadow-lg shadow-slate-100">
                    <div className='flex px-10 py-5'>
                        <div>
                            <h3 className='flex text-4xl text-green-600 font-bold'>Bintang Store
                                <button className='mx-5 py-1 px-2 self-start text-sm text-slate-700 font-semibold tracking-tighter duration-300 hover:bg-slate-200 hover:text-green-600'>Kategori</button>
                            </h3>
                        </div>
                        <div className="flex w-1/2">
                            <div className='input-group relative flex items-stretch w-full mb-4'>
                                <input type="search" class="form-control relative flex-auto min-w-0 block w-full outline-none bg-none px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-none focus:border-green-600" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"
                                />
                                <button className='bg-slate-300 absolute -right-2 top-0 bottom-0 rounded-tr-md rounded-br-md px-3 py-2 mx-2'>
                                    Cari
                                </button>
                            </div>
                        </div>
                        <div className="flex">
                            <button className='mx-9 mb-4 px-3 duration-300 hover:bg-slate-200'>Cart</button>
                            <button className='font-bold mb-4 px-3 mx-2 rounded-md text-md text-green-600 bg-white border border-green-600'>Masuk</button>
                            <button className='font-bold mb-4 px-3 rounded-md text-md text-white border bg-green-600'>Daftar</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
