function isAnagram(s, t) {
    // Check if the lengths of s and t are the same
    if (s.length !== t.length) {
        return false;
    }

    // Create hashmaps to store the frequency of characters in s and t
    const sCount = {};
    const tCount = {};

    // Populate the hashmap for s
    for (let char of s) {
        if (sCount[char]) {
            sCount[char]++;
        } else {
            sCount[char] = 1;
        }
    }

    // Populate the hashmap for t
    for (let char of t) {
        if (tCount[char]) {
            tCount[char]++;
        } else {
            tCount[char] = 1;
        }
    }

    // Compare the hashmaps
    for (let key in sCount) {
        if (sCount[key] !== tCount[key]) {
            return false;
        }
    }

    return true;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false
