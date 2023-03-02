
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const sequences = [];
    for (let i = 0; i < s.length; i++) {
        let sequence = s[i];
        let nextIndex = i + 1;
        while (nextIndex < s.length) {
            let nextCharacter = s[nextIndex];
            if (sequence.includes(nextCharacter)) {
                break;
            }

            sequence = `${sequence}${nextCharacter}`;
            nextIndex++;
        }
        sequences.push(sequence);
    }

    const longest = sequences.reduce((a, b) => b.length > a.length ? b : a);
    return longest.length;
};

module.exports = lengthOfLongestSubstring;