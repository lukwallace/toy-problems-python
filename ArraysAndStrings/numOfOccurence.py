# Write a function that finds the number of occurrences of a sub-string
# within another string ignoring case. (do this without regular expressions)

# Example:
# numOfOccurence('tewrwaBcfasaBCabcgadfasdAbcsfaSFD','abc')
# Output: 4
def numOfOccurence(string, key):
  string = string.lower()
  key = key.lower()
  size = len(key)
  counter = 0

  for i, c in enumerate(string):
    substr = string[i:len(key) + i]
    if(len(substr) != size): 
      break

    if(substr == key):
      counter += 1

  return counter

# Some tests
print numOfOccurence('a', 'asdwd') #0
print numOfOccurence('oafnbdufidbsfoAfn', 'oafn') #2
print numOfOccurence('tewrwaBcfasaBCabcgadfasdAbcsfaSFD','abc') #4
print numOfOccurence('aaAAaA', 'a') #6