/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let chars = {};
    let maxSize = 0;
    let left = 0;
    for (let i = 0; i < s.length; i++) {

        while (s[i] in chars) {
            delete chars[s[left]];
            left++;
        }

        chars[s[i]] = i;
        maxSize = Math.max(maxSize, i - left + 1);
    }

    return maxSize;
};

module.exports = lengthOfLongestSubstring;