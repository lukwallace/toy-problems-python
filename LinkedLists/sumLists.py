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
A.append(6)
A.append(6)

B = LinkedList()
B.append(3)
B.append(4)
B.append(1)

# Make a function that takes two linked lists
# and outputs the sum in the form of a linked list
def sumLists(a, b):
  a = a.head
  b = b.head
  carry = 0
  res = LinkedList()

  ten = 1
  while(a != None and b != None):
    ab = a.value + b.value + carry
    carry = 1 if ab >= 10 else 0
    res.append(ab % 10)
    a = a.next
    b = b.next

  while(a != None):
    ac = a.value + carry
    carry = 1 if ac >= 10 else 0
    res.append(ac % 10)
    a = a.next

  while(b != None):
    bc = b.value + carry
    carry = 1 if bc >= 10 else 0
    res.append(bc % 10)
    b = b.next

  return res

print 'Testing {} + {}: {}'.format(A, B, sumLists(A, B))

