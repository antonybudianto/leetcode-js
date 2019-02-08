/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;

  while (head) {
    if (head !== null) {
      let nxt = head.next;
      head.next = prev;
      prev = head;
      head = nxt;
    }
  }

  return prev;
};
