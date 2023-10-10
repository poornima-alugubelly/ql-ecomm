export type priceComparisonType = {
    [key: string]: number;
};

export type ctaType = {
    text: string;
    link: string;
};

export type testimonialType = {
    avatarImg: string;
    testimonial: string;
    cta: ctaType;
    author: string;
    designation: string;
    productId: string;
};

export type bestSellingItemType = {
    productImg: Record<string, never>;
};

export type homePageDataType = {
    carousel: carouselItemType[];
    testimonials: testimonialType[];
    // bestSelling: bestSellingItemType[];
};

export type AboutManufacturerType = {
    'PAST CLIENTS': string[];
    CERTIFICATIONS?: string[];
    'OPERATING SINCE': string[];
};
type BedSize = 'Twin Size' | 'Full Size' | 'Queen Size' | 'King Size' | 'California King Size';

export type Dimensions = {
    [key in BedSize]: {
        [key in string]: string;
    };
};

export type ProductInformationType = {
    DIMENSIONS?:
        | Dimensions
        | string[]
        | {
              [key in string]: string;
          };
    WEIGHT?: string[];
    MATERIALS: string[];
    DETAILS: string[];
    'CARE INSTRUCTIONS'?: string[];
    'Set Up Instructions'?: string[];
    'Model Size'?: string[];
    'Set Includes'?: string[];
};
export type ProductInformationKeys = keyof ProductInformationType;
export type PricesComparisonType = {
    [key: string]: number;
};

export type ProductType = {
    id: string;
    name: string;
    description: string;
    price: number;
    sizeOptions?: string[] | Record<string, string>;
    productImages: string[];
    aboutManufacturer: AboutManufacturerType;
    productInformation: ProductInformationType;
    pricesComparison: PricesComparisonType;
};

export type carouselItemType = ProductType & {
    productImg: string;
    cta: ctaType;
};
