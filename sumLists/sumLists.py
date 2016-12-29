#Learning python classes.
print 'Running . . .'
class Node(object):
  def __init__(self, value):
    self.value = value
    self.next = None

class LinkedList(object):
  def __init__(self):
    self.head = None
    self.tail = None

  def __str__(self):
    i = self.head
    res = '('
    while(i != self.tail):
      res += str(i.value) + ' -> '
      i = i.next

    res += str(i.value) + ')'
    return res

  def append(self, value):
    n = Node(value)
    if(self.tail == None):
      self.head = n
      self.tail = n
    else:
      self.tail.next = n
      self.tail = n

# #Simple test for Node
# node = Node('Oh')
# print node.value
# print 'Testing List'

# #Simple test for LinkedList
# a = LinkedList()
# a.append('Oh')
# a.append('Wat')
# a.append('Dup')
# print 'Head value: {}'.format(a.head.value)
# print 'Tail value: {}'.format(a.tail.value)
# print a

A = LinkedList()
A.append(5)
A.append(1)
A.append(6)

B = LinkedList()
B.append(3)
B.append(4)
B.append(1)

def sumLists(a, b):
  a = a.head
  b = b.head
  res = 0
  #Gets the value from the first list
  ten = 1
  while(a.next != None):
    res += a.value * ten
    ten *= 10
    a = a.next
  res += a.value * ten

  #Gets the value from the second list
  ten = 1
  while(b.next != None):
    res += b.value * ten
    ten *= 10
    b = b.next
  res += b.value * ten

  return res

print 'Testing {} + {}: {}'.format(A, B, sumLists(A, B))

