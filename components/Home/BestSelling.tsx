import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const BestSelling = () => {
    // const router = useRouter();
    const brands = ['Away', 'Boss'];

    return (
        <div className="container py-4">
            <h3 className="text-5xl my-3 ] font-qara font-light ">BEST SELLING</h3>
            <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-16">
                {[1, 2, 3, 4, 5, 6].map((item) => {
                    return (
                        <Link
                            className="flex flex-col w-[260px] group hover:card-shadow transition-all duration-300 hover:-translate-y-2 hover:card-shine-effect "
                            key={item}
                            // onClick={() => {
                            //     router.push('/product/1');
                            // }}
                            href="/product/1"
                        >
                            <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                                <Image
                                    src="https://picsum.photos/200/300"
                                    fill
                                    alt="prduct-img"
                                    className="object-fit"
                                ></Image>
                            </div>
                            <div className="p-4 border border-zinc-500">
                                <p className="text-xl font-qara font-semibold">Mink Coat</p>
                                <p className="text-xs text-gray-500">Same manufacturer as</p>
                                <div className="flex items-center gap-1 uppercase">
                                    {brands.map((item, index) => (
                                        <>
                                            <p className="text-xs">{item}</p>
                                            {index !== brands.length - 1 && <p className="text-xs"> •</p>}
                                        </>
                                    ))}
                                </div>
                                <p className="text-semibold">₹3000</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
