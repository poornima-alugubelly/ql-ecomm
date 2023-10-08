import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { testimonialType } from './home.types';
import Image from 'next/image';
import { ArrowBigRight, ChevronsRight } from 'lucide-react';
import Link from 'next/link';
interface TestimonialCardProps {
    data: testimonialType[];
}

export const Testimonials = ({ data }: TestimonialCardProps) => {
    return (
        <section className="mt-8">
            <div className="container py-4">
                <h3 className="text-3xl md:text-4xl mt-8 mb-6 font-qara uppercase">Testimonials</h3>
                <div className="grid md:grid-cols-3 auto-cols-auto  gap-6 md:gap-16">
                    {data.map((item) => {
                        return (
                            <Link
                                className="border border-black  h-auto flex relative shadow-lg"
                                href={'/product/1'}
                                key={item.testimonial}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="0.75"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-quote bg-background absolute -top-[2%] -left-[2%] z-10"
                                >
                                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                                </svg>
                                <div className="flex flex-col  p-4">
                                    <Image
                                        src={item.avatarImg}
                                        alt="avatar"
                                        width={56}
                                        height={56}
                                        className="rounded-full mx-auto mt-2"
                                    ></Image>
                                    <p className="uppercase text-zinc-600 text-base text-center font-bold mt-2">
                                        {item.author}
                                    </p>
                                    <p className="text-xs text-gray-500 text-center mb-3">
                                        {item.designation}
                                    </p>
                                    <div className="bg-background text-zinc-700  grow-0 text-xs md:text-base  font-light rounded-l-md">
                                        {item.testimonial}
                                    </div>
                                    <div className="flex justify-between mt-auto ">
                                        <Button
                                            variant={'link'}
                                            size={'link'}
                                            className="font-bold text-zinc-800 ml-auto mt-2 text-xs md:text-base"
                                        >
                                            {item.cta.text}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right ml-2"
                                            >
                                                <path d="M18 8L22 12L18 16" />
                                                <path d="M2 12H22" />
                                            </svg>
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
