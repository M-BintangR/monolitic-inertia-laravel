import React from 'react'
import { AiOutlineStock } from 'react-icons/ai';
import { FaCity } from 'react-icons/fa';

export const Card = ({ products, wrap }) => {
    return (
        <div className={`py-4  ${wrap ? 'flex-wrap justify-evenly' : 'overflow-x-auto pl-4 gap-x-2'} flex flex-row  scrollbar-hide mt-3 `}>
            {products.map((product, i) => (
                <div key={i} className="flex flex-row justify-evenly">
                    <div className={`${wrap ? 'w-[166px] max-w-[175px] mb-3' : 'w-[145px]'} h-[280px] rounded-lg bg-white shadow-md`}>
                        <div className="w-full h-1/2 overflow-hidden rounded-tr-lg rounded-tl-lg">
                            <img src={`https://source.unsplash.com/1600x900/?${product.gambar}`} className='w-full h-full object-cover' alt={product.gambar} />
                        </div>
                        <div className="flex flex-col py-1 px-2">
                            <p className='text-xs tracking-tight'>{product?.desc}</p>
                            <h2 className='text-md font-bold leading-3 mt-2'>Rp{product?.harga}</h2>
                            <div className='mt-1'>
                                <div>
                                    <div className='bg-red-600 text-white text-xs rounded-sm px-1 inline-block mr-1'>{product?.diskon.persen}</div>
                                    <span className='text-xs inline-block line-through text-slate-400'>Rp{product?.diskon.harga}</span>
                                </div>
                                <div>
                                    <FaCity className='inline-block mr-1 text-violet-600' />
                                    <span className='text-xs text-slate-400'>{product?.kota}</span>
                                </div>
                                <div>
                                    <AiOutlineStock className='inline-block mr-1 text-yellow-600' />
                                    <span className='text-xs text-slate-400'>{product?.stock}Stock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >

    )
}


export const CardBox = ({ values, warna }) => {
    return (
        <div className={`w-full flex flex-row justify-center flex-wrap gap-1 my-5 ${warna} py-1`} >
            {
                values.map((value, i) => (
                    <div key={i} className="w-44 h-[100px] bg-slate-300">
                        <div className='relative'>
                            <img src={`https://source.unsplash.com/1600x900/?${value.gambar}`} className='w-full h-full object-cover' />
                            <div className={`absolute bottom-0 ${warna} mx-1 my-2 px-1 rounded-sm`}>
                                <h2 className='text-xs text-white'>Rp {value.harga}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}



