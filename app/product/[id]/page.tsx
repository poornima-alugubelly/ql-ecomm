'use client';
import { CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PaymentBtn } from '../../../components/Product/PaymentBtn';
import { createSentenceFromArray } from '@/utils/text.utils';
import { useState } from 'react';
import { formatNumber } from '@/utils/numbers.utils';
import { ProductDetails } from '@/components/Product/ProductDetails';
import { ManufacturerDetails } from '@/components/Product/ManufacturerDetails';
import dynamic from 'next/dynamic';
import { BRAND_NAME } from '@/constants/common.constants';
import { allProducts } from '@/data/data';
import { AboutManufacturerType, ProductInformationType } from '@/components/Home/home.types';
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
    const item = allProducts.find((item) => item.id === params.id);
    const [sizeSelected, setSizeSelected] = useState('');
    const [itemPrice, setItemPrice] = useState(item?.price || 0);
    const prices = {
        [BRAND_NAME]: itemPrice,
        ...item?.pricesComparison,
    };
    const brands = Object.keys(prices);
    const calculateSavingsPercentage = (price: number) => {
        const brandPrice = prices[BRAND_NAME] || 0;
        return ((price - brandPrice) / price) * 100;
    };

    // const products = await getProducts();

    return item ? (
        <div className="flex flex-col md:flex-row gap-12 mb-6 container md:items-start mt-28 ">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {item.productImages.map((imgSrc) => {
                    return (
                        <img
                            src={imgSrc}
                            width={400}
                            height={400}
                            alt="product"
                            key={imgSrc}
                            // loading="lazy"
                        ></img>
                    );
                })}
            </div>
            <div className="text-mocha-dark">
                <div className="w-full md:w-[360px] bg-white ">
                    <div className="border border-t-0 border-l-0 border-r-0 p-6 ">
                        <p className="header-5  mb-3">{item.name}</p>

                        <div>
                            <span className="text-sm">From the makers of </span>
                            <div className="font-ebGaramond uppercase font-bold font-white px-2 btn w-fit mt-2">
                                {createSentenceFromArray(brands.slice(1))}
                            </div>
                        </div>
                    </div>
                    <div className="p-6 grow-0 flex flex-col gap-2">
                        <p className="text-zinc-500 font-light text-sm">{item.description}</p>
                        <p className="text-xs mt-2">Select size</p>
                        {item.sizeOptions && (
                            <div className="cursor-pointer flex gap-2 flex-wrap w-full">
                                {Array.isArray(item.sizeOptions)
                                    ? item.sizeOptions.map((item, index) => {
                                          return (
                                              <Badge
                                                  variant={sizeSelected === item ? 'default' : 'outline'}
                                                  key={item + index}
                                                  className="text-xs"
                                                  onClick={() => {
                                                      sizeSelected === item
                                                          ? setSizeSelected('')
                                                          : setSizeSelected(item);
                                                  }}
                                              >
                                                  {item}
                                              </Badge>
                                          );
                                      })
                                    : Object.keys(item.sizeOptions).map((key) => (
                                          <Badge
                                              variant={sizeSelected === key ? 'default' : 'outline'}
                                              key={key}
                                              className="text-xs"
                                              onClick={() => {
                                                  //@ts-ignore
                                                  setItemPrice(parseInt(item.sizeOptions[key]));
                                                  sizeSelected === key
                                                      ? setSizeSelected('')
                                                      : setSizeSelected(key);
                                              }}
                                          >
                                              {key}
                                          </Badge>
                                      ))}
                            </div>
                        )}
                        <div className="flex gap-2 items-center my-1">
                            <span className="text-lg">₹{formatNumber(itemPrice)}</span>{' '}
                        </div>
                        <PaymentBtn
                            body={{
                                price: itemPrice,
                                notes: {
                                    size: sizeSelected,
                                },
                            }}
                            requiredPayment={Boolean(item.sizeOptions)}
                        />
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
                                        <td className="p-2 border">₹{formatNumber(price)}</td>
                                        <td className="p-2 border ">
                                            {brand === BRAND_NAME ? (
                                                <CheckCircle className="mx-auto" />
                                            ) : (
                                                `${Math.ceil(calculateSavingsPercentage(price))}%`
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <ManufacturerDetails
                    manufacturerInformation={item.aboutManufacturer as AboutManufacturerType}
                />
                <ProductDetails productInformation={item.productInformation as ProductInformationType} />
            </div>
        </div>
    ) : (
        <p>sorry product not found</p>
    );
};

export default Products;
