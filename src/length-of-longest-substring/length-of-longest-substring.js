
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let maxSize = 0;
    let left = 0;
    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }

        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1);
    }

    return maxSize;
};

module.exports = lengthOfLongestSubstring;