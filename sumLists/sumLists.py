#Learning python classes.
print 'Running . . .'
class Node(object):
  def __init__(self, value):
    self.value = value
    self.next = None

  # @property
  # def value(self):
  #   return self._value

  # @value.setter
  # def value(self, value):
  #   self._value = value

  # @value.deleter
  # def value(self):
  #   del self._value

class LinkedList(object):
  def __init__(self):
    self.head = None
    self.tail = None

  def append(self, value):
    n = Node(value)
    if(self.tail == None):
      self.head = n
      self.tail = n
    else:
      self.tail.next = n
      self.tail = n


node = Node('Oh')
print node.value
print 'Testing List'

a = LinkedList()
a.append('Oh')
a.append('Wat')
a.append('Dup')
print 'Head value: {}'.format(a.head.value)
print 'Tail value: {}'.format(a.tail.value)
