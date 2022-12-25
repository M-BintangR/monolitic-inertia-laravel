import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react';
import { ButtonScroll } from './Button';

const Category = ({ values }) => {
    const [fixCategory, setFixCategory] = useState(false);
    const [btnScroll, setBtnScroll] = useState(false);

    const categoryEvent = useRef();
    const scrollCategory = useRef();
    const setFix = () => {
        if (window.scrollY >= 290 && window.scrollY <= 3000) {
            setFixCategory(true);
        } else {
            setFixCategory(false);
        }
    }

    const scrollToRight = useCallback(() => {
        scrollCategory.current.scrollBy(500, 0);
        setBtnScroll(true);
    }, []);

    const scrollToLeft = useCallback(() => {
        scrollCategory.current.scrollTo(0, 500);
        setBtnScroll(false);
    }, []);


    window.addEventListener('scroll', setFix);

    return (
        <div ref={categoryEvent} className={`duration-500 py-1 ${fixCategory ? 'fixed top-[50px] md:top-[120px] drop-shadow-md box-border right-0 left-0 z-50 bg-white md:px-24' : ''}`}>
            <div className="md:relative">
                <div ref={scrollCategory} className={`duration-300 scroll-smooth mt-2 overflow-x-auto flex flex-row gap-2 my-1 scrollbar-hide px-3 min-w-[80px]`}>
                    {values.map((value, i) => (
                        <h5 key={i} className={`${fixCategory ? 'bg-white text-slate-500 border border-slate-300 md:border-none md:text-white text-sm md:text-md md:bg-green-600' : ' bg-green-600'} text-sm md:text-xl font-semibold text-white rounded-xl md:rounded-lg px-2 py-1 md:px-7 md:py-4`}>{value.title}</h5>
                    ))}
                </div>
                <ButtonScroll
                    scrollToLeft={scrollToLeft}
                    scrollToRight={scrollToRight}
                    isVisible={btnScroll}
                />

            </div>
        </div>
    )
}

export default Category
