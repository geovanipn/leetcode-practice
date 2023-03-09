
const assert = require('assert');
const lengthOfLongestSubstring = require("./length-of-longest-substring");

describe('Longest Substring Without Repeating Characters', function () {
    describe('Given a string s, find the length of the longest substring without repeating characters.', function () {
        const cases = [
            {
                stringValue: 'abcabcbb',
                result: 3
            },
            {
                stringValue: 'bbbbb',
                result: 1
            },
            {
                stringValue: 'pwwkew',
                result: 3
            },
            {
                stringValue: 'sub of substring from string',
                result: 10
            },
            {
                stringValue: 'asdfasdfghjklasdf',
                result: 9
            },
            {
                stringValue: 'dvdf',
                result: 3
            }
        ]

        cases.forEach(testCase => {
            it(`string '${testCase.stringValue}', longest substring length should be ${testCase.result}`, function () {
                const result = lengthOfLongestSubstring(testCase.stringValue);
                assert.deepStrictEqual(testCase.result, result);
            });
        })
    });
});

