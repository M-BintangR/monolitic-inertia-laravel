import React from 'react'

const Carousel = ({ values }) => {
    return (
        <div className="py-1 px-2 overflow-x-auto flex flex-row gap-x-2 scrollbar-hide">
            {values.map((value, i) => (
                <div key={i} className="flex flex-row justify-evenly">
                    <div className="bg-slate-300 overflow-hidden w-screen h-[90px] rounded-lg ">
                        <img src={`https://source.unsplash.com/1600x900/?${value.gambar}`} className='w-full h-full object-cover' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Carousel
