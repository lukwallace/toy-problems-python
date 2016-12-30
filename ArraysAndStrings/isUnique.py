# Make a function that determines if a string has all unique characters
def isUnique(str):
  mem = []
  for c in str:
    if(c in mem):
      return False
    mem.append(c)
  return True

# Some tests
print isUnique('wasd')  #True
print isUnique('wassd') #False
print isUnique('wassd') #False
print isUnique('wasfd') #True
