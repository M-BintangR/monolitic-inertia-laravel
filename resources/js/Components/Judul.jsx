import React from 'react'

export const SubJudul = ({ title }) => {
    return (
        <div>
            <h2 className='px-3 md:px-0 py-2 mt-3 text-lg font-semibold md:my-6 md:text-3xl md:font-bold text-slate-800'>{title}
                <span className='text-sm md:text-xl text-green-500 float-right md:float-none md:ml-5 md:font-bold'>Lihat semua</span>
            </h2>
        </div>
    )
}
