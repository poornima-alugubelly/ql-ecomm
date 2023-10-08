'use client';
import { getRandomNumber } from '@/utils/numbers.utils';
import React, { useMemo } from 'react';

const NumProductsText = () => {
    const randomNumber = useMemo(() => getRandomNumber({ max: 35, min: 15 }), []);
    return <p className=" text-red-600 text-xs w-fit p-1 rounded-md">Only {randomNumber} pieces left!</p>;
};

export default NumProductsText;
