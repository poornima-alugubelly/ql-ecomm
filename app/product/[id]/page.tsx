'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PaymentBtn } from '../../../components/Product/PaymentBtn';
import { createSentenceFromArray } from '@/utils/text.utils';
import { useState } from 'react';
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

const Products = ({ params }: { params: { id: string } }) => {
    const item = {
        id: '123',
        name: 'Mink fur coat',
        description: 'amazing fur coat',
        brands: ['gucci', 'prada'],
        price: 14555,
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
        aboutManufacturer: [
            'EST 1800',
            ['EST 1800', 'Manufacturer of products of gucci and prada', 'Delivers exquisite quality'],
            'Delivers exquisite quality',
        ],
        pricesComparison: {
            gucci: 30000,
            prada: 50000,
        },
    };
    const [sizeSelected, setSizeSelected] = useState('');
    // const products = await getProducts();

    return (
        <div className="flex flex-col md:flex-row gap-12 my-6 container items-start">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {item.productImages.map((imgSrc) => {
                    return <Image src={imgSrc} width={400} height={400} alt="product" key={imgSrc}></Image>;
                })}
            </div>

            <div className="w-full md:w-[360px] bg-white ">
                <div className="border border-t-0 border-l-0 border-r-0 p-6">
                    <p className="text-5xl font-qara font-bold">{item.name}</p>

                    <div>
                        <span>From the makers of </span>
                        <div className="uppercase font-bold font-qara font-white px-2 btn w-fit mt-1">
                            {createSentenceFromArray(item.brands)}
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
                                        sizeSelected === item ? setSizeSelected('') : setSizeSelected(item);
                                    }}
                                >
                                    {item}
                                </Badge>
                            );
                        })}
                    </div>

                    <p>₹{item.price}</p>
                    <ul>
                        <li>
                            {Object.entries(item.pricesComparison).map(([key, value]) => (
                                <div key={key}>
                                    <span>{key}</span>
                                    <span className="line-through">{value}</span>
                                </div>
                            ))}
                        </li>
                    </ul>
                    <PaymentBtn price={item.price} />
                    <p className="bg-gray-400 text-white text-xs w-fit p-1 rounded-md">
                        Only 10 pieces left!
                    </p>
                    <p className="text-xl text-gray-600">Meet the manufacturer</p>
                    <ul className="text-sm">
                        {item.aboutManufacturer.map((point, index) => {
                            return (
                                <li key={index + 'manufacterer'} className="text-gray-400 flex">
                                    <span>• </span> <span className="ml-2">{point}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <p className="text-xl text-gray-600">Materials and care:</p>
                    <ul className="text-sm">
                        {item.materialsAndCare.map((point, index) => {
                            return (
                                <li key={index + 'materials'} className="text-gray-400 flex">
                                    <span>• </span> <span className="ml-2">{point}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Products;
