import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav>
            <div className="h-16 flex gap-8 items-center fixed top-0 left-0 right-0 z-10 bg-background border border-b-gray-300">
                <Link className="ml-10" href="/" prefetch={false}>
                    <img src="/brand-logo.png" alt="logo" className="w-[140px]"></img>
                </Link>
            </div>
        </nav>
    );
};
