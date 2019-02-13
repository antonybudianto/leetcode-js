/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var ll2str = function(ll) {
  if (ll === null) {
    return ''
  }
  return ll.val + ',' + ll2str(ll.next)
}

var arr2ll = function(arr) {
  if (arr.length === 0) {
    return null
  }
  let n = parseInt(arr[0])
  let node = new ListNode(n)
  node.next = arr2ll(arr.slice(1))
  return node
}

var merge = function(nums1, nums2) {
  let arr = []
  while (nums1.length && nums2.length) {
    let pick = nums1[0] < nums2[0] ? nums1 : nums2
    arr.push(pick[0])
    pick.shift()
  }
  while (nums1.length) {
    arr.push(nums1[0])
    nums1.shift()
  }
  while (nums2.length) {
    arr.push(nums2[0])
    nums2.shift()
  }
  return arr
}

var mergeKLists = function(lists) {
  const arr = lists.map(l =>
    ll2str(l)
      .split(',')
      .filter(s => s !== '')
      .map(s => parseInt(s))
  )
  let res = arr.reduce((a, c) => {
    return merge(a, c)
  }, [])

  return arr2ll(res)
}
