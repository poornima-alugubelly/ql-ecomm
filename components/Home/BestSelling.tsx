import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const BestSelling = () => {
    // const router = useRouter();
    const brands = ['Away', 'Boss'];

    return (
        <div className="container py-4">
            <h3 className="md:text-4xl mt-8 mb-6 my-3  font-qara font-light ">BEST SELLING</h3>
            <div className="grid md:grid-cols-3 md:grid-rows-2 gap-y-8 gap-x-16">
                {[1, 2, 3, 4, 5, 6].map((item) => {
                    return (
                        <Link
                            className="flex flex-col md:w-[260px] group hover:card-shadow transition-all duration-300 hover:-translate-y-2 hover:card-shine-effect "
                            key={item}
                            // onClick={() => {
                            //     router.push('/product/1');
                            // }}
                            href="/product/1"
                        >
                            <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                                <img
                                    src="https://picsum.photos/200/300"
                                    alt="prduct-img"
                                    className="object-fit w-full h-full"
                                    // loading="lazy"
                                ></img>
                            </div>
                            <div className="p-4 border border-zinc-500">
                                <p className="text-xl font-qara font-semibold">Mink Coat</p>
                                <p className="text-xs text-gray-500 py-1.5">Same manufacturer as</p>
                                <div className="flex items-center gap-1 uppercase font-bold">
                                    {brands.map((item, index) => (
                                        <>
                                            <p className="text-xs">{item}</p>
                                            {index !== brands.length - 1 && <p className="text-xs"> •</p>}
                                        </>
                                    ))}
                                </div>
                                <p className="font-bold mt-2.5">₹3000</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
