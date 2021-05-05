def deleteNode(head, position):
    cur = head
    if position == 0:
        return head.next
    while position > 1:
        cur = cur.next
        position -= 1
    cur.next = cur.next.next
    return head