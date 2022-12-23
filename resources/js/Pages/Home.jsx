import React from 'react'
import Navbar from '@/Components/Navbar'
import Menus from '@/Components/Menus';
import { Card, CardBox } from '@/Components/Card';
import Carousel from '@/Components/Carousel';
import { SubJudul } from '@/Components/Judul';

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
            gambar: 'celana',
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
        { gambar: 'shirt' },
        { gambar: 'clothes' },
        { gambar: 'snack' },
        { gambar: 'anime' }
    ]

    const fashion = [
        { gambar: 'shirt' },
        { gambar: 'clothes' },
        { gambar: 'snack' },
        { gambar: 'anime' }
    ]

    return (
        <div className='bg-green-600 h-[5000px]'>
            <Navbar />
            <div className="bg-white rounded-tl-lg rounded-tr-lg">
                <div>
                    <Menus filteringMenus={filteringMenus} />
                </div>
                <div>
                    <Carousel values={carousel} />
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
            </div>
        </div>
    )
}

export default Home
