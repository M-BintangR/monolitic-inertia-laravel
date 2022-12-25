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

const Product = () => {
    const [dropDown, setDropDown] = useState(false);
    return (
        <div>
            <Navbar onOpen={() => setDropDown(true)} btnBack={true} />
            <div>
                <div>
                    <Menus filteringMenus={filteringMenus} />
                </div>
                <Carousel values={carouselData} />
                <div className='relative'>
                    <SubJudul title={'Kategori Pilihan'} />
                    <Category values={categoryData} />
                </div>
                <div>
                    <Card products={products} wrap={true} button={false} />
                </div>
            </div>
            <div>
                <Footer menus={filteringMenus} />
            </div>
            <DropdownNav isVisible={dropDown} onClose={() => setDropDown(false)} />
        </div>
    )
}

export default Product
