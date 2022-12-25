import React, { useState } from 'react'
import Navbar from '@/Components/Navbar'
import Menus from '@/Components/Menus';
import { Card } from '@/Components/Card';
import Carousel from '@/Components/Carousel';
import { SubJudul } from '@/Components/Judul';
import Category from '@/Components/Category';
import Footer from '@/Components/Footer';
import { DropdownNav } from '@/Components/Dropdown';
import { filteringMenus, products, carousel as carouselData, category as categoryData } from '@/Components/DataFake';

const Home = () => {


    const [dropDown, setDropDown] = useState(false);
    return (
        <div className='bg-green-600 md:bg-white'>
            <Navbar onOpen={() => setDropDown(true)} />
            <div className="bg-white rounded-tl-2xl rounded-tr-2xl">
                <div className="md:mx-20 lg:mx-28">
                    <div>
                        <Menus filteringMenus={filteringMenus} />
                    </div>
                    <div>
                        <Carousel values={carouselData} />
                    </div>
                    <div className='relative'>
                        <SubJudul title={'Kategori Pilihan'} />
                        <Category values={categoryData} />
                    </div>
                    <div>
                        <SubJudul title={'Produk Hari Ini'} />
                        <div className="bg-green-600 md:bg-white">
                            <Card products={products} button={true} />
                        </div>
                    </div>
                    <div>
                        <SubJudul title={'Produk Terlaris'} />
                        <div>
                            <Card products={products} button={true} />
                        </div>
                    </div>
                    <div >
                        <SubJudul title={'Produk Termurah'} />
                        <div className="bg-green-600 md:bg-white">
                            <Card products={products} button={true} />
                        </div>
                    </div>
                    <div>
                        <SubJudul title={'Produk Fashion'} />
                        <div>
                            <Card products={products} button={true} />
                        </div>
                    </div>
                    <div>
                        <SubJudul title={'Trending'} />
                        <div className="bg-green-600 md:bg-white">
                            <Card products={products} button={true} />
                        </div>
                    </div>
                    <div>
                        <SubJudul title={'Produk Lainnya'} />
                        <div className=''>
                            <Card products={products} wrap={true} button={false} />
                        </div>
                        <div className="flex justify-center mx-2">
                            <button className='py-2 text-center rounded-md w-full text-mb font-bold border border-spacing-1 border-slate-300'>Lihat Selebihnya</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer menus={filteringMenus} />
                </div>
            </div>
            <DropdownNav isVisible={dropDown} onClose={() => setDropDown(false)} />
        </div>

    )
}

export default Home
