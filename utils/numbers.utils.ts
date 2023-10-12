export const getRandomNumber = ({ max, min }: { min: number; max: number }) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const formatNumber = (num: string | number) => {
    let val;
    if (typeof num === 'string') {
        val = parseFloat(num);
    } else if (typeof num === 'number') {
        val = num;
    } else {
        val = 0;
    }
    return num?.toLocaleString();
};
