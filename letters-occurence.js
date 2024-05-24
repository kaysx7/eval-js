const lettersOccurence = (strOrNumber) => {
    const occurrences = {};
    if (typeof strOrNumber !== 'string' && typeof strOrNumber !== 'number') {
        return occurrences;
    }
    const str = typeof strOrNumber === 'number' ? String(strOrNumber) : strOrNumber;
    if (str === 'NaN') {
        return occurrences;
    }
    for (let char of str) {
        const key = isNaN(parseInt(char)) ? char : parseInt(char);
        occurrences[key] = (occurrences[key] || 0) + 1;
    }
    return occurrences;
}
module.exports = lettersOccurence;
