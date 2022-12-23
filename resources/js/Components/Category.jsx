import React from 'react'

const Category = ({ values }) => {
    return (
        <div className='py-1'>
            <h2 className='px-3 py-2 text-lg font-semibold'>Pilihan Kategori</h2>
            <div className="mt-2 overflow-x-auto flex flex-row gap-2 my-1 scrollbar-hide px-3">
                <h5 className='text-md font-semibold text-white bg-green-600 rounded-lg px-2'>Pakaian</h5>

            </div>
        </div>
    )
}

export default Category
