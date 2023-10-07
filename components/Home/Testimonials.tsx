import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { testimonialType } from './home.types';
import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';
import Link from 'next/link';
interface TestimonialCardProps {
    data: testimonialType[];
}

export const Testimonials = ({ data }: TestimonialCardProps) => {
    return (
        <section className="mt-8">
            <div className="container py-4">
                <h3 className="text-3xl md:text-5xl my-3 font-qara uppercase">Testimonials</h3>
                <div className="flex flex-wrap gap-8 md:mx-auto">
                    {data.map((item) => {
                        return (
                            <Link
                                className="flex h-auto items-center group mx-auto"
                                href={'/product/1'}
                                key={item.testimonial}
                            >
                                <div className="bg-gray-300 text-zinc-700 h-[130px] max-w-[200px] md:w-[300px] grow-0 text-caption md:text-xs p-4 shadow-lg font-light rounded-l-md">
                                    {item.testimonial}
                                </div>
                                <div className="w-[150px] h-[150px] relative">
                                    <Image
                                        src={item.avatarImg}
                                        alt="avatar"
                                        fill
                                        className="rounded-lg"
                                    ></Image>
                                    <Button
                                        variant="outlineNormal"
                                        className=" absolute bottom-[10%] left-[85%] rounded-full h-10 w-10 py-0 px-0 group-hover:h-10 group-hover:w-28 group-hover:px-3 group-hover:py-2"
                                        style={{ transition: 'width 350ms ease-in-out' }}
                                    >
                                        <p
                                            className="w-0 group-hover:w-auto overflow-hidden"
                                            style={{ transition: 'width 350ms ease-in-out' }}
                                        >
                                            Explore
                                        </p>
                                        <ChevronsRight
                                            className="h-5 w-5 group-hover:mt-[2px]"
                                            color="#374151"
                                        />
                                    </Button>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
