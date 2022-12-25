import Navbar from '@/Components/Navbar'
import React from 'react'
import { category as categoryData, carousel as carouselData, filteringMenus, products } from '@/Components/DataFake'
import { SubJudul } from '@/Components/Judul'
import Category from '@/Components/Category'
import Carousel from '@/Components/Carousel'
import Menus from '@/Components/Menus'
import { useState } from 'react'
import { DropdownNav } from '@/Components/Dropdown'
import { Card } from '@/Components/Card'
import Footer from '@/Components/Footer'
import { AiFillStar } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'

const Pembelian = () => {
    const [dropDown, setDropDown] = useState(false);
    return (
        <div className='md:bg-white h-[5000px]'>
            <Navbar onOpen={() => setDropDown(true)} btnBack={true} />
            <div className='bg-white rounded-tl-2xl rounded-tr-2xl'>
                <div className='w-full h-1/2 px-3 pt-2'>
                    <img src={`https://source.unsplash.com/1600x900/?anime`} className='w-full h-full object-cover' alt={'gambar'} />
                </div>
                <div>
                    <div className='w-full bg-green-600 px-3 py-1 font-bold text-sm mt-2 text-white'>
                        <h2>Pakaian Anak Muda</h2>
                    </div>
                    <div className="px-3 py-3">
                        <h3 className='text-lg font-bold leading-3 mt-2'>Rp 290.000</h3>
                        <div className='mt-2'>
                            <div className='bg-red-600 text-white text-sm rounded-sm px-1 inline-block mr-1'>10%</div>
                            <span className='text-sm inline-block line-through text-slate-400'>Rp 280.000</span>
                        </div>
                        <div className='mt-3'>
                            <h3 className='text-md font-light'>JINISO-Hight Jeans 865 - 875 BODY GOAL</h3>
                        </div>
                        <div className='mt-3 flex flex-row gap-2 border-b-2 border-slate-300 pb-4'>
                            <div className='p-1'>
                                <p className='text-xs font-light'>Terjual 1rb+</p>
                            </div>
                            <div className='text-sm font-bold border border-slate-300 rounded-md p-1'>
                                <AiFillStar className='text-amber-400 inline mr-1 mb-[1px]' />
                                4.8
                                <span className='text-xs font-light ml-1'>(523)</span>
                            </div>
                            <div className='text-sm font-bold border border-slate-300 rounded-md p-1'>
                                Diskusi
                                <span className='text-xs font-light ml-1'>(14)</span>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-md font-bold mt-5'>Detail Produk</h3>
                            <div className="grid grid-cols-2 mt-3">
                                <div className='flex flex-col text-sm'>
                                    <p className='border-b-[1px] border-slate-300 py-2 px-1'>Kondisi</p>
                                    <p className='border-b-[1px] border-slate-300 py-2 px-1'>Bahan</p>
                                    <p className='border-b-[1px] border-slate-300 py-2 px-1'>Bentuk Pinggang</p>
                                    <p className='border-b-[1px] border-slate-300 py-2 px-1'>Merk</p>
                                    <p className='border-b-[1px] border-slate-300 py-2 px-1'>Kategori</p>
                                </div>
                                <div className='flex flex-col text-sm'>
                                    <p className='border-b-[1px] border-slate-300 py-2 px-1'>Kondisi</p>
                                    <p className='border-b-[1px] border-slate-300 py-2 px-1'>Bahan</p>
                                    <p className='border-b-[1px] border-slate-300 py-2 px-1'>Bentuk Pinggang</p>
                                    <p className='border-b-[1px] border-slate-300 py-2 px-1'>Merk</p>
                                    <p className='border-b-[1px] border-slate-300 py-2 px-1'>Kategori</p>
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-300 pb-3'>
                                <h3 className='text-md font-bold mt-6 mb-2'>Deskripsi Produk</h3>
                                <div className='text-sm'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, porro.
                                </div>
                                <button className='text-sm mt-1 font-bold text-green-700'>Baca Selengkapnya</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-md font-bold mt-6 mb-2 px-3'>Produk Lainnya</h3>
                        <Card products={products} button={true} />
                    </div>
                    <div>
                        <h3 className='text-md font-bold mt-6 mb-2 px-3'>Ulasan Pembeli</h3>
                        <div>
                            <div className="border-y-[2px] border-slate-300">
                                <div className='flex flex-row mx-3 py-3 '>
                                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                                        <img src={`https://source.unsplash.com/1600x900/?anime`} className='w-full h-full object-cover' alt={'gambar'} />
                                    </div>
                                    <div className='ml-2'>
                                        <p className='text-md font-extrabold -mb-2'>Fitri</p>
                                        <small>1 ulasan lengkap</small>
                                    </div>
                                </div>
                                <div className='px-3'>
                                    <div className='inline mr-1'>
                                        <AiFillStar className='text-amber-400 inline' />
                                        <AiFillStar className='text-amber-400 inline' />
                                        <AiFillStar className='text-amber-400 inline' />
                                        <AiFillStar className='text-amber-400 inline' />
                                        <AiFillStar className='text-amber-400 inline' />
                                    </div>
                                    <small>8 bulan lalu</small>
                                    <div className='text-md font-light py-2'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, assumenda.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-md font-bold mt-6 mb-2 px-3'>Rekomendasi lainnya untukmu</h3>
                    <Card products={products} wrap={true} button={false} />
                </div>
            </div>
            <div>
                <Footer menus={filteringMenus} />
            </div>
            <div>
                <div className='fixed bottom-0 left-0 right-0 bg-white drop-shadow-xl flex py-2 px-3 gap-2'>
                    <button className='px-3 py-1 border border-slate-900 rounded-lg'>
                        <BiCommentDetail className='text-slate-700 text-lg' />
                    </button>
                    <button className='flex-auto px-3 py-1 text-green-600 border border-green-600 rounded-lg'>Beli</button>
                    <button className='flex-auto px-3 py-1 text-white border bg-green-600 rounded-lg'>Keranjang</button>
                </div>
            </div>
            <DropdownNav isVisible={dropDown} onClose={() => setDropDown(false)} />
        </div>
    )
}

export default Pembelian
