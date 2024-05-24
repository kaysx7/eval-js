const manipArray = (tableau) => {
    if (!Array.isArray(tableau) || tableau.length === 0) {
        return [];
    }
    const nombres = tableau.filter(item => typeof item === 'number');
    const impairsMultiplies = nombres.map(num => (num % 2 !== 0 ? num * 2 : num));
    const moinsCinq = nombres.map(num => num - 5);
    const divisiblesPar3Pas5 = nombres.filter(num => num % 3 === 0 && num % 5 !== 0);
    const triesDecroissant = [...nombres].sort((a, b) => b - a);
    return [impairsMultiplies, moinsCinq, divisiblesPar3Pas5, triesDecroissant];
}
module.exports = manipArray;
