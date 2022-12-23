import React from 'react'
import Navbar from '@/Components/Navbar'
import Menus from '@/Components/Menus';
import Card from '@/Components/Card';

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
                <div>
                    <h2 className='px-3 py-2 text-lg font-semibold'>Produk Hari Ini</h2>
                    <Card products={products} />
                </div>
            </div>
        </div>
    )
}

export default Home
