import React, { useState } from 'react';
import { Plus } from 'lucide-react';
interface ProductInformation {
    [key: string]: string[];
}

interface ProductDetailsProps {
    productInformation: ProductInformation;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ productInformation }) => {
    const [showDetails, setShowDetails] = useState(false);
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
                Object.keys(productInformation).map((key) => (
                    <div key={key}>
                        <p className="mt-4 mb-2.5 text-gray-400 text-xs">{key}</p>
                        {productInformation[key].length > 1 ? (
                            <ul>
                                {productInformation[key].map((item, index) => (
                                    <div className="flex text-xs" key={item}>
                                        <span>• </span>{' '}
                                        <li key={index} className="ml-2">
                                            {item}
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-xs">{productInformation[key]}</p>
                        )}
                    </div>
                ))}
        </div>
    );
};
