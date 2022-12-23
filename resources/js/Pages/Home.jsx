import React from 'react'
import Navbar from '@/Components/Navbar'
import { AiOutlineStock } from 'react-icons/ai';
import { FaCity } from 'react-icons/fa';
import Icon from '@/Components/Icon'
import Menus from '@/Components/Menus';

const Home = () => {
    const filteringMenus = [
        {
            title: 'Termurah',
            icon: {
                title: 'FaMoneyBillWave',
                color: 'text-green-500'
            }
        },
        {
            title: 'Terlaris',
            icon: {
                title: 'AiOutlineShopping',
                color: 'text-blue-500',
            }
        },
        {
            title: 'Fasion',
            icon: {
                title: 'GiClothes',
                color: 'text-red-500'
            }
        },
        {
            title: 'Makanan',
            icon: {
                title: 'GiFruitBowl',
                color: 'text-violet-500'
            }
        },
        {
            title: 'Trending',
            icon: {
                title: 'AiOutlineCrown',
                color: 'text-rose-500',
            }
        },
    ]

    const products = [
        {
            gambar: 'baju',
            harga: '100.000',
            diskon: {
                persen: '10%',
                harga: '150.000',
            },
            kota: 'Makassar',
            Stock: '250',
        },
        {
            gambar: 'baju',
            harga: '100.000',
            diskon: {
                persen: '10%',
                harga: '150.000',
            },
            kota: 'Makassar',
            Stock: '250',
        },
        {
            gambar: 'baju',
            harga: '100.000',
            diskon: {
                persen: '10%',
                harga: '150.000',
            },
            kota: 'Makassar',
            Stock: '250',
        },
        {
            gambar: 'baju',
            harga: '100.000',
            diskon: {
                persen: '10%',
                harga: '150.000',
            },
            kota: 'Makassar',
            Stock: '250',
        },
        {
            gambar: 'baju',
            harga: '100.000',
            diskon: {
                persen: '10%',
                harga: '150.000',
            },
            kota: 'Makassar',
            Stock: '250',
        },
    ]

    return (
        <div className='bg-green-600'>
            <Navbar />
            <div className="bg-white rounded-tl-md rounded-tr-md">
                <Menus filteringMenus={filteringMenus} />
                <div className="">
                    <h2 className='px-3 py-2 text-lg font-semibold'>Produk Hari Ini</h2>
                    <div className="py-3 overflow-x-auto flex flex-row gap-x-2 scrollbar-hide bg-green-700">
                        {products.map((product, i) => (
                            <div key={i} className="flex flex-row justify-evenly">
                                <div className="overflow-hidden w-[150px] h-[250px] rounded-lg bg-white">
                                    <div className="overflow-hidden w-full h-1/2">
                                        <img src="https://source.unsplash.com/1600x900/?clothes" className='w-full h-full object-cover' alt="" />
                                    </div>
                                    <div className="flex flex-col py-1 px-2 gap-y-1">
                                        <h2 className='text-lg font-bold leading-3 mt-2'>Rp 100.000</h2>
                                        <div className='mt-1'>
                                            <div className='mb-1'>
                                                <div className='bg-red-600 text-white text-xs rounded-sm px-1 inline-block mr-1'>10%</div>
                                                <span className='text-xs inline-block line-through text-slate-400'>Rp 150.000</span>
                                            </div>
                                            <div className='mb-1'>
                                                <FaCity className='inline-block mr-1 text-violet-600' />
                                                <span className='text-xs text-slate-400'>Kota Makassar</span>
                                            </div>
                                            <div>
                                                <AiOutlineStock className='inline-block mr-1 text-yellow-600' />
                                                <span className='text-xs text-slate-400'>250 Stock</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
