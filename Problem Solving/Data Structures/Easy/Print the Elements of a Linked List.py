def printLinkedList(head):
    if not head:
        return
    while head != None:        
        print(head.data)
        head = head.next