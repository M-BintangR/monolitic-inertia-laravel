import React from 'react'
import Navbar from '@/Components/Navbar'
import Menus from '@/Components/Menus';
import { Card, CardBox } from '@/Components/Card';
import Carousel from '@/Components/Carousel';
import { SubJudul } from '@/Components/Judul';
import Category from '@/Components/Category';
import Footer from '@/Components/Footer';

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
                    <Footer menus={filteringMenus} />
                </div>
            </div>
        </div>
    )
}

export default Home
