'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export const BestSelling = () => {
    const router = useRouter();
    const brands = ['Away', 'Boss'];
    return (
        <div className="container py-4">
            <h3 className="text-5xl my-3 ] font-qara font-light ">BEST SELLING</h3>
            <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-16">
                {[1, 2, 3, 4, 5, 6].map((item) => {
                    return (
                        <div
                            className="flex flex-col  cursor-pointer"
                            key={item}
                            onClick={() => {
                                router.push('/product/1');
                            }}
                        >
                            <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                                <Image
                                    src="https://picsum.photos/200/300"
                                    fill
                                    alt="prduct-img"
                                    className="cover"
                                ></Image>
                            </div>
                            <div>
                                <p>Mink Coat</p>
                                <p className="text-xs text-gray-600">Same manufacturer as</p>
                                <div className="flex items-center gap-1">
                                    {brands.map((item, index) => (
                                        <>
                                            <p>{item}</p>
                                            {index !== brands.length - 1 && <p className="text-xs"> •</p>}
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
