export type priceComparisonType = {
    [key: string]: number;
};

export type ctaType = {
    text: string;
    link: string;
};

export type carouselItemType = {
    productImg: string;
    title: string;
    subtitle: string;
    pricesComparison: priceComparisonType[];
    cta: ctaType;
};

export type testimonialType = {
    avatarImg: string;
    testimonial: string;
    cta: ctaType;
    author: string;
    designation: string;
};

export type bestSellingItemType = {
    productImg: Record<string, never>;
};

export type homePageDataType = {
    carousel: carouselItemType[];
    testimonials: testimonialType[];
    // bestSelling: bestSellingItemType[];
};
