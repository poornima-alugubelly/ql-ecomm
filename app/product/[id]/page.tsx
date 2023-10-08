'use client';
import { CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PaymentBtn } from '../../../components/Product/PaymentBtn';
import { createSentenceFromArray } from '@/utils/text.utils';
import { Fragment, useState } from 'react';
import { getRandomNumber } from '@/utils/numbers.utils';
import { ProductDetails } from '@/components/Product/ProductDetails';
import { ManufacturerDetails } from '@/components/Product/ManufacturerDetails';
import dynamic from 'next/dynamic';
// async function getProducts() {
//     try {
//         const res = await fetch('http://localhost:3000/products.json');
//         const data = await res.json();

//         return data;
//     } catch (error) {
//         if (error instanceof Error) {
//             console.error(error.message);
//         }
//     }
// }
// const ProductDetails = dynamic(() => import('../../../components/Product/ProductDetails'), {
//     ssr: false,
//     loading: () => <div className="h-[600px] w-screen animate-pulse"></div>,
// });

const NumProductsText = dynamic(() => import('../../../components/Product/NumProductsText'), {
    ssr: false,
    loading: () => <div className="h-[30px] w-[50px] animate-pulse"></div>,
});
const Products = ({ params }: { params: { id: string } }) => {
    const item = {
        id: '123',
        name: 'Mink fur coat',
        description: 'amazing fur coat',
        price: 16000,
        sizeOptions: ['L', 'M'],
        productImages: [
            'https://content.italic.com/df2eba8a-ca34-43a7-9f3c-780244f4266e.jpeg?ixlib=react-9.8.0&q=80&w=992&auto=format&fit=max',
            'https://content.italic.com/2055d867-f0de-473c-a9ee-dba053d6299f.jpeg?ixlib=react-9.8.0&q=80&w=992&auto=format&fit=max',
            'https://content.italic.com/c103b2bb-a9e4-4900-9e1f-0d53d0048e3f.jpeg?ixlib=react-9.8.0&q=80&w=992&auto=format&fit=max',
            'https://content.italic.com/7627c6de-bb49-440f-a56b-b281222951b4.jpeg?ixlib=react-9.8.0&q=80&w=992&auto=format&fit=max',
        ],
        materialsAndCare: [
            'Easy to wash',
            ['Easy to wash', 'made with top grade fur', 'hand wash only'],
            'hand wash only',
        ],
        aboutManufacturer: {
            'PAST CLIENTS': ['Four seasons', 'Ritz Carlton'],
            CERTIFICATIONS: ['OEKO-TEX', ' ISO 9001', 'BSCI', 'ISO 1400'],
            'OPERATING SINCE': ['1986'],
        },
        productInformation: {
            MATERIALS: ['100% 10-gauge Mongolian cashmere', 'some other stuff'],
            DETAILS: ['Waist tie', 'Features pockets on each side to place your hands or hold small items'],
            'MODEL SIZE': ["Model is 5'9, wearing a size Small"],
            'CARE INSTRUCTIONS': ['Dry clean only.'],
            SHIPPING: ['Standard shipping arrives in 7 to 10 days, with one business day for processing.'],
        },
        pricesComparison: {
            gucci: 30000,
            prada: 50000,
        },
    };
    const [sizeSelected, setSizeSelected] = useState('');
    const prices = {
        ourBrand: item.price,
        ...item.pricesComparison,
    };
    type brandsType = keyof typeof prices;
    const brands = Object.keys(prices);
    const calculateSavingsPercentage = (price: number) => {
        const brandPrice = prices.ourBrand;
        return ((price - brandPrice) / price) * 100;
    };

    // const products = await getProducts();

    return (
        <div className="flex flex-col md:flex-row gap-12 my-6 container items-start">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {item.productImages.map((imgSrc) => {
                    return <Image src={imgSrc} width={400} height={400} alt="product" key={imgSrc}></Image>;
                })}
            </div>
            <div>
                <div className="w-full md:w-[360px] bg-white">
                    <div className="border border-t-0 border-l-0 border-r-0 p-6">
                        <p className="text-5xl font-qara font-bold">{item.name}</p>

                        <div>
                            <span>From the makers of </span>
                            <div className="uppercase font-bold font-qara font-white px-2 btn w-fit mt-1">
                                {createSentenceFromArray(brands.slice(1))}
                            </div>
                        </div>
                    </div>
                    <div className="p-6 grow-0 flex flex-col gap-2">
                        <p className="text-gray-500 font-light text-lg">{item.description}</p>
                        <Button variant={'link'} size={'sm'} className="w-fit p-0 text-xs h-auto">
                            Size chart
                        </Button>
                        <div className="cursor-pointer flex gap-2">
                            {item.sizeOptions.map((item, index) => {
                                return (
                                    <Badge
                                        variant={sizeSelected === item ? 'default' : 'outline'}
                                        key={item + index}
                                        className="text-sm"
                                        onClick={() => {
                                            sizeSelected === item
                                                ? setSizeSelected('')
                                                : setSizeSelected(item);
                                        }}
                                    >
                                        {item}
                                    </Badge>
                                );
                            })}
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="text-lg">₹{item.price}</span>{' '}
                        </div>
                        <PaymentBtn price={item.price} />
                        <NumProductsText />
                        <table className="border-collapse border rounded-lg text-xs">
                            <thead>
                                <tr>
                                    <th className="p-2 border-b">{'  '}</th>
                                    <th className="p-2 border-b">Price</th>
                                    <th className="p-2 border-b">Savings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(prices).map(([brand, price]) => (
                                    <tr key={brand} className="text-center">
                                        <td className="p-2 border"> {brand}</td>
                                        <td className="p-2 border">₹{price}</td>
                                        <td className="p-2 border ">
                                            {brand === 'ourBrand' ? (
                                                <CheckCircle className="mx-auto" />
                                            ) : (
                                                `${calculateSavingsPercentage(price).toFixed(2)}%`
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <ManufacturerDetails manufacturerInformation={item.aboutManufacturer} />
                <ProductDetails productInformation={item.productInformation} />
            </div>
        </div>
    );
};

export default Products;
