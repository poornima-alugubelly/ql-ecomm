import React, { Fragment } from 'react';
interface ManufacturerInformation {
    [key: string]: string[];
}

interface ManufacturerDetailsProps {
    manufacturerInformation: ManufacturerInformation;
}

export const ManufacturerDetails: React.FC<ManufacturerDetailsProps> = ({ manufacturerInformation }) => {
    return (
        <div className="w-full md:w-[360px] bg-white my-4 p-6">
            <p className="text-base">Manufacturer</p>

            {Object.entries(manufacturerInformation).map(([key, value]) => (
                <Fragment key={key}>
                    <p className="mt-4 mb-2.5 text-gray-400 text-xs">{key}</p>
                    <ul className="flex gap-2">
                        {value.map((item, index) => (
                            <Fragment key={item + index}>
                                <p className="text-xs">{item}</p>
                                {index !== value.length - 1 && <p className="text-xs"> •</p>}
                            </Fragment>
                        ))}
                    </ul>
                </Fragment>
            ))}
        </div>
    );
};
