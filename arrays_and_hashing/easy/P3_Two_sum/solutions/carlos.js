let hashmap = new Map();

for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (hashmap.has(num)) {
        return [hashmap.get(num), i];
    } else {
        hashmap.set(target - num, i);
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// Example 1
let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

// Example 2
let nums2 = [3, 2, 4];
let target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]

// Example 3
let nums3 = [3, 3];
let target3 = 6;
console.log(twoSum(nums3, target3)); // Output: [0, 1]
