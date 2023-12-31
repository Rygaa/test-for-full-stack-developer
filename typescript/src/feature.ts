/*
  Given two arrays of integers, create a function that concatenates these two arrays 
  and then sorts the resulting array in descending order.
*/
export function concatenateAndSort(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2).sort((a, b) => -(a - b));
}

/*
  Given an array of integers 'nums' and an integer 'target', 
  write a function to find all unique pairs in the array that sum up to 'target'.
  Return an array of pairs.
*/
export function findAllPairs(
  nums: number[],
  target: number
): [number, number][] {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  let result: [number, number][] = [];
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];

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
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}

/*
  Given an unsorted array of integers 'nums', 
  write a function to find the length of the longest consecutive elements sequence.
*/
export function longestConsecutiveSequence(nums: number[]): number {
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak;
}

/*
  Given an array of integers 'nums' and an integer 'k', 
  write a function to remove all elements that are divisible by 'k' 
  and return the new length of the array.
*/
export function removeDivisibleBy(nums: number[], k: number): number {
  const newArray = nums.filter((num) => num % k !== 0);
  nums.length = 0;

  newArray.forEach((num) => {
    nums.push(num);
  });

  return nums.length;
}

/*
  Given an array of integers, where every element appears twice except for one,
  write a function to find that single one that does not appear twice.
*/
export function findSingleElement(nums: number[]): number {
  let numSet = new Set<number>();
  nums.map((num) => {
    if (numSet.has(num)) {
      numSet.delete(num);
    } else numSet.add(num);
  });
  const array = [...numSet];
  if (array.length === 0) {
    return 0;
  } else return array[0];
}
