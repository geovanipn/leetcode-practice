
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let chars = {};
    let maxSize = 0;
    let currentSize = 0;
    for (let i = 0; i < s.length; i++) {

        if (s[i] in chars) {
            chars = {};
            currentSize = 0;
        }

        chars[s[i]] = i;
        currentSize++;
        maxSize = Math.max(maxSize, currentSize);
    }

    return maxSize;
};

module.exports = lengthOfLongestSubstring;