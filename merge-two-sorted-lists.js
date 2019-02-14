/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const ll2str = ll => {
  if (ll === null) {
    return ''
  }
  let lnext = ll2str(ll.next)
  return ll.val + (lnext === '' ? '' : ';' + lnext)
}

const arr2ll = arr => {
  if (arr.length === 0) {
    return null
  }
  const node = new ListNode()
  node.val = arr[0]
  arr.shift()
  node.next = arr2ll(arr)
  return node
}

var mergeTwoLists = function(l1, l2) {
  const applyMap = str =>
    str
      .split(';')
      .filter(s => s !== '')
      .map(n => parseInt(n))
  let a1 = applyMap(ll2str(l1))
  let a2 = applyMap(ll2str(l2))
  let arr = []

  while (a1.length && a2.length) {
    let a3 = a1[0] < a2[0] ? a1 : a2
    arr.push(a3[0])
    a3.shift()
  }

  while (a1.length) {
    arr.push(a1[0])
    a1.shift()
  }
  while (a2.length) {
    arr.push(a2[0])
    a2.shift()
  }
  let res = arr2ll(arr)
  return res
}
