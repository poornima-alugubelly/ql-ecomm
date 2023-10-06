import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { testimonialType } from './home.types';

interface TestimonialCardProps {
    data: testimonialType[];
}

export const Testimonials = ({ data }: TestimonialCardProps) => {
    return (
        <section className="mt-8 bg-slate-100">
            <div className="container py-4">
                <h3 className="text-5xl my-3 font-qara uppercase">Testimonials</h3>
                <div className="grid grid-cols-3 grid-rows-1 gap-x-8">
                    {data.map((item) => {
                        return (
                            <div className="w-full grid-cols-1">
                                <Avatar>
                                    <AvatarImage src={item.avatarImg} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="h-24 text-slate-700">{item.testimonial}</p>
                                    <Button variant="outline">{item?.cta?.text}</Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
