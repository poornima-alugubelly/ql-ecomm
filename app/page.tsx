import { BestSelling } from '@/components/Home/BestSelling';
import { Testimonials } from '@/components/Home/Testimonials';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { homePageDataType } from '@/components/Home/home.types';
export const revalidate = 60;
/**
 * Swiper components must be dynamically imported with { ssr: false }.
 */
const Carousel = dynamic(() => import('../components/Home/Carousel'), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});

async function getData() {
    try {
        const res = await fetch('http://localhost:3000/home.json');
        const data = await res.json();

        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}
export default async function Page() {
    const data: homePageDataType = await getData();
    return (
        <div>
            <Carousel data={data.carousel} />
            <Testimonials data={data.testimonials} />
            <BestSelling />
        </div>
    );
}
