'use client';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { carouselItemType } from './home.types';
import { Button } from '../ui/button';
import { createSentenceFromArray } from '@/utils/text.utils';
import { useRouter } from 'next/router';
import Link from 'next/link';
register();

// interface CarouselProps {
//     data: carouselItemType[];
// }
const Carousel = ({ data }) => {
    const swiperRef = useRef(null);
    document.addEventListener(
        'mouseenter',
        (event) => {
            const el = event.target;
            if (el && el.matches && el.matches('.swiper-container')) {
                el.swiper.autoplay.stop();
                el.classList.add('swiper-paused');

                const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
                activeNavItem.style.animationPlayState = 'paused';
            }
        },
        true
    );

    document.addEventListener(
        'mouseleave',
        (event) => {
            const el = event.target;
            if (el && el.matches && el.matches('.swiper-container')) {
                el.swiper.autoplay.start();
                el.classList.remove('swiper-paused');

                const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');

                activeNavItem.classList.remove('swiper-pagination-bullet-active');
                // activeNavItem.style.animation = 'none';

                setTimeout(() => {
                    activeNavItem.classList.add('swiper-pagination-bullet-active');
                    // activeNavItem.style.animation = '';
                }, 5000);
            }
        },
        true
    );
    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            watchSlidesProgress: true,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },

            longSwipes: false,

            // These are new...
            injectStyles: [
                `
                .swiper-button-next,
                .swiper-button-prev {
                 height: 32px;
                 width: 32px;
                 color: #cbd5e1;

                },
                .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }


        .swiper-pagination-bullet {
            width: 40px;
            height: 6px;
            border-radius: 10px;
            position: relative;
            overflow: hidden;
           background-color: #fff;
           color: #cbd5e1;
            
            &::before {
                content: "";
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                
                // transition: opacity 200ms;
            }
        }
        
        .swiper-pagination-bullet-active {

            background: rgba(#000);
            
            &::before {
                background-color: #27272a;
                animation: slide-progress 5s linear forwards;
                
                .swiper-paused & {
                    // opacity: 0;
                    animation-play-state: paused;
                }
            }
        }
        
        @keyframes slide-progress {
            0% {
                transform: translateX(-100%);
                // width: 0;
            }
        
            100% {
                transform: translateX(0);
                // width: 100%;
            }
        }
        
               
            `,
            ],
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    return (
        <div className="z-0 sticky top-0">
            <div className="relative">
                <swiper-container ref={swiperRef} init="false">
                    {data.map((item) => {
                        const brands = Object.keys(item.pricesComparison);
                        return (
                            <swiper-slide key={item.name + 'carousel'}>
                                <div style={{ width: '100%', height: '720px' }} className="flex">
                                    <div style={{ width: '100%', height: '720px', position: 'relative' }}>
                                        <img
                                            src={item.productImg}
                                            alt="product"
                                            className="w-full h-full"
                                            // loading="lazy"
                                        ></img>
                                        <div className=" font-ebGaramond   px-2.5 md:px-8 max-w-[50%] md:max-w-[40%]   absolute  bottom-[10%] md:bottom-[15%] py-6 md:py-10 left-[10%] flex flex-col items-center justify-center glass-effect">
                                            <p className="header-4 md:header-3 text-white  text-center">
                                                {item.name}
                                            </p>
                                            {/* <p className="text-xl highlight-effect">{item.subtitle}</p>
                                             */}
                                            <div className="text-xs text-white text-center mt-2 font-thin px-2 opacity-80">
                                                <span className="text-xs md:text-base">
                                                    From the makers of{' '}
                                                </span>
                                                <span className="font-bold  uppercase flex gap-2 text-center mx-auto text-white">
                                                    {/* {createSentenceFromArray(item.brands)}
                                                     */}
                                                    {brands.map((brand, index) => (
                                                        <div
                                                            className="flex items-center"
                                                            key={brand + 'carousel'}
                                                        >
                                                            <p className="text-base md:text-lg font-black ">
                                                                {brand}
                                                            </p>
                                                            {index !== brands.length - 1 && (
                                                                <p className="text-xs ml-2"> •</p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </span>
                                            </div>

                                            <Link
                                                className=" btn  bg-background hover:bg-primaryBrown hover:text-white
                                                inline-flex py-1.5 px-3  items-center justify-center text-base md:text-lg mt-2 font-normal ring-offset-background transition-colors"
                                                href={`/product/${item.id}`}
                                                prefetch={false}
                                            >
                                                {item.cta.text}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        );
                    })}
                </swiper-container>
            </div>
        </div>
    );
};

export default Carousel;
