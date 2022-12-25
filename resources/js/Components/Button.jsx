import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export const ButtonScroll = ({ scrollToLeft, scrollToRight, isVisible, card }) => {
    return (
        <div>
            <div className={`hidden md:block absolute -right-5 ${card ? 'top-36' : 'top-2.5'}`}>
                <button onClick={scrollToRight} className='rounded-full -z-50 bg-white drop-shadow-lg p-2 border border-slate-200'>
                    <AiOutlineArrowRight className='text-slate-400 text-2xl' />
                </button>
            </div>
            <div className={` hidden ${isVisible ? 'duration-500 md:block' : 'md:hidden'}  absolute -left-5 ${card ? 'top-36' : 'top-2.5'}`}>
                <button onClick={scrollToLeft} className='rounded-full  -z-50 bg-white drop-shadow-lg p-2 border border-slate-200'>
                    <AiOutlineArrowLeft className='text-slate-400 text-2xl' />
                </button>
            </div>
        </div>
    )
}

