def reversePrint(head):
    if head:
        reversePrint(head.next)
        print(head.data)
    else:
        return