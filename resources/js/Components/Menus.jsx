import React from 'react'
import Icon from './Icon'

const Menus = ({ filteringMenus }) => {
    return (
        <div className='py-1'>
            <h2 className='px-3 py-2 text-lg font-semibold'>Pilihan Menu</h2>
            <div className="mt-2 overflow-x-auto flex flex-row gap-2 my-1 scrollbar-hide">
                {filteringMenus.map((value, i) => (
                    <div key={i} className='flex flex-col mx-3'>
                        <div className="text-xl text-blue-500 mx-auto">
                            <Icon value={value} />
                        </div>
                        <h5 className='text-sm py-2'>{value.title}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menus
