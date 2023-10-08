import { BestSelling } from '@/components/Home/BestSelling';
import { Testimonials } from '@/components/Home/Testimonials';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { homePageDataType } from '@/components/Home/home.types';
import { Suspense } from 'react';
import { Quote } from 'lucide-react';
export const revalidate = 60;

/**
 * Swiper components must be dynamically imported with { ssr: false }.
 */
const Carousel = dynamic(() => import('../components/Home/Carousel'), {
    ssr: false,
    loading: () => <div className="h-[600px] w-screen animate-pulse"></div>,
});

// async function getData() {
//     try {
//         const res = await fetch('http://localhost:3000/home.json');
//         const data = await res.json();

//         return data;
//     } catch (error) {
//         if (error instanceof Error) {
//             console.error(error.message);
//         }
//     }
// }
export default async function Page() {
    // const data: homePageDataType = await getData();
    const data = {
        carousel: [
            {
                productImg:
                    'https://air-prod.imgix.net/df92a94b-864f-4d07-bca5-e5d65b48042f.jpg?w=3840&h=2040&fm=jpg&fit=crop',
                title: 'Misha Cashmere Duster Robe Cardigan',
                subtitle: 'from the makers of Gucci and Prada',
                pricesComparison: {
                    gucci: 30000,
                    prada: 50000,
                },

                cta: {
                    text: 'Get now',
                    link: '1',
                },
            },
            {
                productImg:
                    'https://air-prod.imgix.net/9df4d3a2-5bd3-4421-92b4-72d486cffbef.jpg?w=4267&h=2400&fm=jpg&fit=crop',
                title: 'luxury scarf',
                brands: ['gucci', 'prada'],
                subtitle: 'from the makers of Gucci and Prada',
                pricesComparison: {
                    gucci: 30000,
                    prada: 50000,
                },

                cta: {
                    text: 'Get now',
                    link: '1',
                },
            },
            {
                productImg:
                    'https://air-prod.imgix.net/060c3a77-fced-4035-9a1a-8da941ec42e7.jpg?w=3840&h=2040&fm=jpg&fit=crop',
                title: 'luxury scarf',
                subtitle: 'from the makers of Gucci and Prada',
                brands: ['gucci', 'prada'],
                pricesComparison: {
                    gucci: 30000,
                    prada: 50000,
                },

                cta: {
                    text: 'Get now',
                    link: '1',
                },
            },
        ],
        testimonials: [
            {
                avatarImg: 'https://i.pravatar.cc/300',
                testimonial:
                    'Their commitment to quality and innovation sets them apart, making them a symbol of prestige and sophistication in the world of luxury fashion and lifestyle.',
                cta: {
                    text: 'Get now',
                    link: '1',
                },
                author: 'Joe smith',
            },
            {
                avatarImg: 'https://i.pravatar.cc/300',
                testimonial:
                    'With exquisite attention to detail, they consistently deliver opulent creations that redefine luxury.',
                cta: {
                    text: 'Get now',
                    link: '`',
                },
                author: 'Joanna smith',
            },
            {
                avatarImg: 'https://i.pravatar.cc/300',
                testimonial:
                    'This prestigious luxury brand epitomizes timeless elegance and unparalleled craftsmanship.',
                cta: {
                    text: 'Get now',
                    link: '1',
                },
                author: 'David gray',
            },
        ],
    };

    return (
        <div>
            <Carousel data={data.carousel} />

            <div className="bg-background relative z-10">
                <Testimonials data={data.testimonials} />
                <BestSelling />
            </div>
        </div>
    );
}
