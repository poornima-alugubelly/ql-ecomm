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
                // console.log('mouseenter');
                // console.log('autoplay running', swiper.autoplay.running);
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
            // console.log('mouseleave', swiper.activeIndex, swiper.slides[swiper.activeIndex].progress);
            // console.log('autoplay running', swiper.autoplay.running);
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
           background-color: #cbd5e1;
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

            background: rgba(#000, 0.4);
            
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
        <swiper-container ref={swiperRef} init="false">
            {data.map((item) => {
                return (
                    <swiper-slide class="blue-slide" key={item.title}>
                        <div style={{ width: '100%', height: '600px' }} className="flex">
                            <div style={{ width: '80%', height: '600px', position: 'relative' }}>
                                <Image src={item.productImg} alt="product" fill></Image>
                            </div>
                            <div className="w-[20%] h-full bg-slate-500 flex flex-col items-center justify-center">
                                <p className="text-3xl">{item.title}</p>
                                <p className="text-2xl">{item.subtitle}</p>
                                <ul>
                                    {item.pricesComparison.map((priceComparison, idx) => (
                                        <li key={idx}>
                                            {Object.entries(priceComparison).map(([key, value]) => (
                                                <div key={key}>
                                                    {key},{value}
                                                </div>
                                            ))}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline">{item.cta.text}</Button>
                            </div>
                        </div>
                    </swiper-slide>
                );
            })}
        </swiper-container>
    );
};

export default Carousel;
