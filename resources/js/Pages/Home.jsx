import React from 'react'
import Navbar from '@/Components/Navbar'
import Menus from '@/Components/Menus';
import { Card, CardBox } from '@/Components/Card';
import Carousel from '@/Components/Carousel';
import { SubJudul } from '@/Components/Judul';
import Category from '@/Components/Category';
import { filter } from 'lodash';
import { AiOutlineCopyright } from 'react-icons/ai';

const Home = () => {
    const filteringMenus = [
        {
            title: 'Termurah',
            desc: ' Lorem ipsum dolor sit amet...',
            icon: {
                title: 'FaMoneyBillWave',
                color: 'text-green-500'
            }
        },
        {
            title: 'Terlaris',
            desc: ' Lorem ipsum dolor sit amet...',
            icon: {
                title: 'AiOutlineShopping',
                color: 'text-blue-500',
            }
        },
        {
            title: 'Fasion',
            desc: ' Lorem ipsum dolor sit amet...',
            icon: {
                title: 'GiClothes',
                color: 'text-red-500'
            }
        },
        {
            title: 'Makanan',
            desc: ' Lorem ipsum dolor sit amet...',
            icon: {
                title: 'GiFruitBowl',
                color: 'text-violet-500'
            }
        },
        {
            title: 'Trending',
            desc: ' Lorem ipsum dolor sit amet...',
            icon: {
                title: 'AiOutlineCrown',
                color: 'text-rose-500',
            }
        },
    ]

    const products = [
        {
            gambar: 'celana',
            desc: ' Lorem ipsum dolor sit amet...',
            harga: '20.000',
            diskon: {
                persen: '10%',
                harga: '30.000',
            },
            kota: 'Surabaya',
            stock: '250',
        },
        {
            gambar: 'baju',
            desc: ' Lorem ipsum dolor sit amet...',
            harga: '100.000',
            diskon: {
                persen: '10%',
                harga: '150.000',
            },
            kota: 'Makassar',
            stock: '250',
        },
        {
            gambar: 'tas',
            desc: ' Lorem ipsum dolor sit amet...',
            harga: '50.000',
            diskon: {
                persen: '10%',
                harga: '60.000',
            },
            kota: 'Bandung',
            stock: '250',
        },
        {
            gambar: 'baju',
            desc: ' Lorem ipsum dolor sit amet...',
            harga: '100.000',
            diskon: {
                persen: '10%',
                harga: '150.000',
            },
            kota: 'Makassar',
            stock: '250',
        },
        {
            gambar: 'baju',
            desc: ' Lorem ipsum dolor sit amet...',
            harga: '100.000',
            diskon: {
                persen: '10%',
                harga: '150.000',
            },
            kota: 'Makassar',
            stock: '250',
        },
    ]

    const carousel = [
        { gambar: 'shirt' },
        { gambar: 'clothes' },
        { gambar: 'snack' },
        { gambar: 'anime' }
    ]

    const terlaris = [
        {
            gambar: 'shirt',
            desc: ' Lorem ipsum dolor sit amet...',
            harga: '100.000',
            kota: 'Makassar'
        },
        {
            gambar: 'clothes',
            desc: ' Lorem ipsum dolor sit amet...',
            harga: '200.000',
            kota: 'Palembang'
        },
        {
            gambar: 'snack',
            desc: ' Lorem ipsum dolor sit amet...',
            harga: '10.000',
            kota: 'Surabaya'
        },
        {
            gambar: 'anime',
            desc: ' Lorem ipsum dolor sit amet...',
            harga: '30.000',
            kota: 'Jakarta'
        }
    ]

    const fashion = [
        { gambar: 'shirt', harga: '100.000', kota: 'Makassar' },
        { gambar: 'clothes', harga: '200.000', kota: 'Palembang' },
        { gambar: 'snack', harga: '10.000', kota: 'Surabaya' },
        { gambar: 'anime', harga: '30.000', kota: 'Jakarta' }
    ]


    return (
        <div className='bg-green-600'>
            <Navbar />
            <div className="bg-white rounded-tl-lg rounded-tr-lg">
                <div>
                    <Menus filteringMenus={filteringMenus} />
                </div>
                <div>
                    <Carousel values={carousel} />
                </div>
                <div>
                    <Category values={''} />
                </div>
                <div>
                    <SubJudul title={'Produk Hari Ini'} />
                    <div className="bg-green-600">
                        <Card products={products} />
                    </div>
                </div>
                <div>
                    <SubJudul title={'Produk Terlaris'} />
                    <CardBox values={terlaris} warna={'bg-blue-600'} />
                </div>
                <div >
                    <SubJudul title={'Produk Termurah'} />
                    <div>
                        <Card products={products} />
                    </div>
                </div>
                <div>
                    <SubJudul title={'Produk Fashion'} />
                    <CardBox values={fashion} warna={'bg-rose-600'} />
                </div>
                <div>
                    <SubJudul title={'Trending'} />
                    <div>
                        <Card products={products} />
                    </div>
                </div>
                <div>
                    <footer className='mt-5'>
                        <div className="px-4 py-3 border-y-[1px] border-slate-200">
                            <h3 className='text-sm font-bold'>Mau Cari Apa di Bintang Store?</h3>
                            {filteringMenus.map((menu, i) => (
                                <p className='inline-block text-xs text-slate-400 mr-1'> {menu.title} | </p>
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
                </div>
            </div>
        </div>
    )
}

export default Home
