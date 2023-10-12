import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { bestSellers } from '@/data/data';

export const BestSelling = () => {
    return (
        <div className="container py-4">
            <h3 className=" mt-8 mb-6 my-3 header-6 md:header-4 text-mocha-dark italic ">Best Sellers</h3>
            <div className="flex flex-wrap gap-x-8 mx-auto justify-center md:justify-between gap-y-8 ">
                {bestSellers.map((item) => {
                    const brands = Object.keys(item.pricesComparison);
                    return (
                        <Link
                            className="border border-zinc-500 flex flex-col w-[270px] md:w-[250px] group hover:card-shadow transition-all duration-300 hover:-translate-y-2 hover:card-shine-effect "
                            key={item.id + 'best-sellers'}
                            prefetch={false}
                            href={`/product/${item.id}`}
                        >
                            <div className="w-full h-[260px]  md:h-[243px] relative">
                                <img
                                    src={item.productImages[0]}
                                    alt={item.name}
                                    className="object-fit w-full h-full border-none z-10"
                                    // loading="lazy"
                                ></img>
                            </div>
                            <div className="p-4 border-t border-zinc-500">
                                <p className="text-lg font-ebGaramond text-mocha-dark">{item.name}</p>
                                <p className="text-caption text-zinc-500 py-1.5">Same manufacturer as</p>
                                <div className="flex items-center gap-1">
                                    {brands.map((item, index) => (
                                        <>
                                            <p className="text-xs">{item}</p>
                                            {index !== brands.length - 1 && <p className="text-xs"> •</p>}
                                        </>
                                    ))}
                                </div>
                                <p className="text-sm mt-2.5">₹{item.price}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
