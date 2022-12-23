import { map } from 'lodash';
import React from 'react'
import { AiOutlineMail, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineCrown } from 'react-icons/ai';
import { FaMoneyBillWave } from 'react-icons/fa';
import { GiClothes, GiFruitBowl } from 'react-icons/gi';
import Icon from './Icon';

const Navbar = () => {

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

    return (
        <div className='bg-green-600'>
            <div className="pt-3 pb-5 px-4 flex gap-x-2 w-screen">
                <div className="relative flex-auto">
                    <input
                        className='telative px-9 text-sm w-full h-[30px] rounded-md border-spacing-1 focus:outline-none focus:border focus:border-green-500 focus:ring-1 focus:ring-green-500'
                        type="text"
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
            <div className="bg-white rounded-tl-md rounded-tr-md">
                <h2 className='px-3 py-2 text-lg font-semibold'>Kategori</h2>
                <div className="overflow-x-auto flex flex-row gap-2 my-1">
                    {filteringMenus.map((value, i) => (
                        <div key={i} className='flex flex-col'>
                            <div className="text-xl text-blue-500 mx-auto">
                                <Icon value={value} />
                            </div>
                            <h5 className='text-sm'>{value.title}</h5>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar
