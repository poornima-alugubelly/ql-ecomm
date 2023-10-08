import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND_NAME } from '@/constants/common.constants';

export const Navbar = () => {
    return (
        <nav>
            <div className="h-16 flex gap-8 items-center border border-b-gray-300">
                {/* <Image src="/vercel.svg" alt="logo" width={56} height={56}></Image> */}
                <Link className="ml-10" href="/">
                    {BRAND_NAME}
                </Link>
            </div>
        </nav>
    );
};
