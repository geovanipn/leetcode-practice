
const assert = require('assert');
const twoSum = require("./two-sum");

describe('Two Sum', function () {
    describe('Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', function () {
        const cases = [
            {
                nums: [2,7,11,15],
                target: 9,
                result: [0,1]
            },
            {
                nums: [3,2,4],
                target: 6,
                result: [1,2]
            },
            {
                nums: [3,3],
                target: 6,
                result: [0,1]
            },
            {
                nums: [1,3,4],
                target: 5,
                result: [0,2]
            },
        ]

        cases.forEach(testCase => {
            it(`target ${testCase.target}, nums ${testCase.nums}, sum indexes should be ${testCase.result}`, function () {
                const result = twoSum(testCase.nums, testCase.target);
                assert.deepStrictEqual(testCase.result, result);
            });
        })
    });
});
