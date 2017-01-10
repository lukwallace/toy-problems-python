# Given a file containing a json of permissions, parse the contents 
# and create a csv with column marked 1 if found in user, 0 if not

# Assumes we don't know the total set of available permissions
import json
import csv
from pprint import pprint

def jsonToCSV(filename):
  jsonstr = open(filename).read()
  data = json.loads(jsonstr)
  columns = ['users']
  matrix = [columns]

  # Build the matrix
  for user in data.keys():
    matrix.append([user])
    li = [0] * (len(columns) - 1)
    matrix[-1].extend(li)
    for permission in data[user]:
      # print "BEFORE {}".format(matrix)
      if(permission in columns):
        ind = columns.index(permission)
        matrix[-1][ind] = 1
      else:
        columns.extend([permission])
        matrix[-1].extend([1])
      # print "AFTER {}".format(matrix)

  # Fill in the missing 0s
  for row in matrix:
    diff = len(matrix[0]) - len(row)
    if(diff):
      row.extend([0] * diff)

  # pprint(matrix)
  # Generate the CSV file
  with open('output.csv', 'wb') as csvfile:
    writer = csv.writer(csvfile)
    for row in matrix:
      writer.writerows([row])

jsonToCSV('./file.json')
