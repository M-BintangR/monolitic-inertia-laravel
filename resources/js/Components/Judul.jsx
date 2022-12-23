import React from 'react'

export const SubJudul = ({ title }) => {
    return (
        <div>
            <h2 className='px-3 py-2 mt-3 text-lg font-semibold'>{title}
                <span className='text-sm text-green-500 float-right'>Lihat semua</span>
            </h2>
        </div>
    )
}
