""" 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
"""


def isAnagram(s, t):
  s = s.lower()
  t = t.lower()

  if sorted(s) == sorted(t):
    return True
  else:
    return False

print(isAnagram("anagram", "nagaram")) # true
print(isAnagram("rat", "car")) # false