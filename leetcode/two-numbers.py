class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def make_number(li):
        n = li.val
        while li.next:
            n += li.next.val
        return parseInt(n)

    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        return make_number(l1) + make_number(l2)


def buildList(n):
    for el in n:
        

assert Solution.addTwoNumbers([])