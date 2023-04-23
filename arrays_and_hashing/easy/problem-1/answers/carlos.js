function containsDuplicate(nums) {
    const hashmap = {};
    for (const num of nums) {
        if (hashmap[num]) {
            return true;
        }
        hashmap[num] = 1;
    }
    return false;
}

// space and time complexity: O(n)
// where n is the length of the array

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums), "Output: true");

nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums), "Output: false");

nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums), "Output: true");
