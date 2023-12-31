"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSingleElement = exports.removeDivisibleBy = exports.longestConsecutiveSequence = exports.findAllPairs = exports.concatenateAndSort = void 0;
/*
  Given two arrays of integers, create a function that concatenates these two arrays
  and then sorts the resulting array in descending order.
*/
function concatenateAndSort(arr1, arr2) {
    return arr1.concat(arr2).sort(function (a, b) { return -(a - b); });
}
exports.concatenateAndSort = concatenateAndSort;
/*
  Given an array of integers 'nums' and an integer 'target',
  write a function to find all unique pairs in the array that sum up to 'target'.
  Return an array of pairs.
*/
function findAllPairs(nums, target) {
    nums.sort(function (a, b) { return a - b; });
    var n = nums.length;
    var result = [];
    var left = 0;
    var right = n - 1;
    while (left < right) {
        var currentSum = nums[left] + nums[right];
        if (currentSum === target) {
            result.push([nums[left], nums[right]]);
            left++;
            right--;
            while (left < right && nums[left] === nums[left - 1]) {
                left++;
            }
            while (left < right && nums[right] === nums[right + 1]) {
                right--;
            }
        }
        else if (currentSum < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return result;
}
exports.findAllPairs = findAllPairs;
/*
  Given an unsorted array of integers 'nums',
  write a function to find the length of the longest consecutive elements sequence.
*/
function longestConsecutiveSequence(nums) {
    var e_1, _a;
    var numSet = new Set(nums);
    var longestStreak = 0;
    try {
        for (var numSet_1 = __values(numSet), numSet_1_1 = numSet_1.next(); !numSet_1_1.done; numSet_1_1 = numSet_1.next()) {
            var num = numSet_1_1.value;
            if (!numSet.has(num - 1)) {
                var currentNum = num;
                var currentStreak = 1;
                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }
                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (numSet_1_1 && !numSet_1_1.done && (_a = numSet_1.return)) _a.call(numSet_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return longestStreak;
}
exports.longestConsecutiveSequence = longestConsecutiveSequence;
/*
  Given an array of integers 'nums' and an integer 'k',
  write a function to remove all elements that are divisible by 'k'
  and return the new length of the array.
*/
function removeDivisibleBy(nums, k) {
    var newArray = nums.filter(function (num) { return num % k !== 0; });
    nums.length = 0;
    newArray.forEach(function (num) {
        nums.push(num);
    });
    return nums.length;
}
exports.removeDivisibleBy = removeDivisibleBy;
/*
  Given an array of integers, where every element appears twice except for one,
  write a function to find that single one that does not appear twice.
*/
function findSingleElement(nums) {
    var numSet = new Set();
    nums.map(function (num) {
        if (numSet.has(num)) {
            numSet.delete(num);
        }
        else
            numSet.add(num);
    });
    var array = __spreadArray([], __read(numSet), false);
    if (array.length === 0) {
        return 0;
    }
    else
        return array[0];
}
exports.findSingleElement = findSingleElement;
