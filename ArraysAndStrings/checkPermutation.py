# Given two strings, write a function that checks if either is
# a permutation of the other.

def checkPermutation(strOne, strTwo):
  return sorted(strOne) == sorted(strTwo)

print checkPermutation('String', 'tSring') # True