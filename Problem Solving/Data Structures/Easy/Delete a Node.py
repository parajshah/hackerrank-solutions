class SinglyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None


# Solution
def deleteNode(head, position):
    cur = head
    if position == 0:
        return head.next
    while position > 1:
        cur = cur.next
        position -= 1
    cur.next = cur.next.next
    return head