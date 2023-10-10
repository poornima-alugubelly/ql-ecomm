import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ProductInformationKeys, ProductInformationType } from '../Home/home.types';

interface ProductDetailsProps {
    productInformation: ProductInformationType;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ productInformation }) => {
    const [showDetails, setShowDetails] = useState(false);
    const RenderObject = (obj: any, depth: number = 0) => {
        return (
            <div style={{ marginLeft: depth * 20 }}>
                {Object.keys(obj).map((key) => (
                    <div key={key}>
                        <span>{key}:</span>{' '}
                        {typeof obj[key] === 'object' ? RenderObject(obj[key], depth + 1) : obj[key]}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="w-full md:w-[360px] bg-white my-4 p-6 ">
            <div
                className="flex justify-between cursor-pointer "
                onClick={() => setShowDetails((prev) => !prev)}
            >
                <p>Product details</p>
                <Plus className="w-5 h-5" style={{ fontWeight: 100 }} />
            </div>

            {showDetails &&
                Object.keys(productInformation).map((key) => {
                    if (key in productInformation) {
                        return (
                            <div key={key} className="text-xs">
                                <p className="mt-4 mb-2.5 text-gray-400 ">{key}</p>

                                {Array.isArray(productInformation[key as keyof ProductInformationType]) ? (
                                    <ul>
                                        {
                                            // @ts-ignore
                                            productInformation[key].map((item, index) => (
                                                <div className="flex text-xs" key={item}>
                                                    <span>• </span>{' '}
                                                    <li key={index} className="ml-2">
                                                        {item}
                                                    </li>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                ) : (
                                    RenderObject(productInformation[key as keyof ProductInformationType])
                                )}
                            </div>
                        );
                    }
                })}
        </div>
    );
};
