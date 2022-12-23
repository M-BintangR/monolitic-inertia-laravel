import React from 'react'
import { AiOutlineStock } from 'react-icons/ai';
import { FaCity } from 'react-icons/fa';

const Card = ({ products }) => {
    return (
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
    )
}

export default Card
