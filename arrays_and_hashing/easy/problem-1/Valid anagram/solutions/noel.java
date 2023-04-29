class Solution {
    public boolean isAnagram(String s, String t) {
        // Time O(n log n + m log m)
        // Space O(1)

        if (s.length() != t.length()) {
            return false;
        }

        Map<Character, Integer> freq = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char letter = s.charAt(i);
            if (freq.containsKey(letter)) {
                int frequency = freq.get(letter);
                freq.replace(letter, ++frequency);
            } else {
                freq.put(letter, 1);
            }
        }

        for (int i = 0; i < t.length(); i++) {
            char letter = t.charAt(i);
            if (!freq.containsKey(letter)) {
                return false;
            } else {
                int frequency = freq.get(letter);
                if (frequency == 1) {
                    freq.remove(letter);
                } else {
                    freq.replace(letter, --frequency);
                }
            }
        }
        return freq.isEmpty();
    }
}