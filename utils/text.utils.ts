export const createSentenceFromArray = (words: string[]): string => {
    const length = words.length;

    if (length === 0) {
        return '';
    } else if (length === 1) {
        return words[0];
    } else if (length === 2) {
        return words.join(' and ');
    } else {
        const firstWords = words.slice(0, length - 1);
        const lastWord = words[length - 1];
        return `${firstWords.join(', ')}, and ${lastWord}`;
    }
};
