#Given two strings, write a function that checks if one is
#permutation of the other.

def checkPermutation(str, key):
  for i, c in enumerate(key):
    print 'Index: {}, Character: {}'.format(i, c)


checkPermutation('String', 'Nothing')