import React, { Fragment } from 'react';
import { AboutManufacturerType } from '../Home/home.types';

interface ManufacturerDetailsProps {
    manufacturerInformation: AboutManufacturerType;
}

export const ManufacturerDetails: React.FC<ManufacturerDetailsProps> = ({ manufacturerInformation }) => {
    return (
        <div className="w-full md:w-[360px] bg-white my-4 p-6">
            <p className="text-base text-mocha-text">Manufacturer</p>

            {Object.entries(manufacturerInformation).map(([key, value]) => (
                <Fragment key={key}>
                    <p className="mt-4 mb-2.5 text-gray-400 text-xs">{key}</p>

                    <ul className="flex gap-2">
                        {value.map((item, index) => (
                            <li key={index} className="text-mocha-text text-sm">
                                {item}
                            </li>
                        ))}
                    </ul>
                </Fragment>
            ))}
        </div>
    );
};
