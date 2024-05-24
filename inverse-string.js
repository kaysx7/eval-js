const inverseString = (str) => {
    if (typeof str !== 'string' || str.trim() === '') {
        return '';
    }
    str = str.trim();
    const words = str.split(/\s+/);
    const reversedWords = words.reverse();
    const result = reversedWords.join(' ');
    return result;
};
module.exports = inverseString;