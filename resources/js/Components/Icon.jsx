import React, { useMemo } from 'react'
import { AiOutlineCrown, AiOutlineShopping } from 'react-icons/ai'
import { FaMoneyBillWave } from 'react-icons/fa'
import { GiClothes, GiFruitBowl } from 'react-icons/gi'

const Icon = ({ value }) => {


    const Result = () => {
        switch (value.icon.title) {
            case 'FaMoneyBillWave':
                return (
                    <FaMoneyBillWave className={`${value.icon.color}`} />
                )
            case 'AiOutlineShopping':
                return (
                    <AiOutlineShopping className={`${value.icon.color}`} />
                )
            case 'GiClothes':
                return (
                    <GiClothes className={`${value.icon.color}`} />
                )
            case 'GiFruitBowl':
                return (
                    <GiFruitBowl className={`${value.icon.color}`} />
                )
            case 'AiOutlineCrown':
                return (
                    <AiOutlineCrown className={`${value.icon.color}`} />
                )
            default:
                return;
        }
    };


    return (
        <Result />
    )
}

export default Icon
