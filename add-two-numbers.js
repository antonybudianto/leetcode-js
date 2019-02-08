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
var ll2num = function(ll) {
  if (ll === null) {
    return '';
  }
  return ll2num(ll.next) + ll.val;
};

var str2ll = function(str) {
  if (str.length === 0) {
    return null;
  }
  let n = parseInt(str[0]);
  let node = new ListNode(n);
  node.next = str2ll(str.slice(1));
  return node;
};

var calc = function(a, b) {
  let x = a.split('');
  let y = b.split('');
  let xlen = x.length;
  let ylen = y.length;
  let arr;
  let arr2;
  if (xlen === ylen) {
    arr = x;
    arr2 = y;
  } else {
    arr = xlen > ylen ? x : y;
    arr2 = xlen < ylen ? x : y;
  }
  let n = arr.length;
  x = arr;
  y = arr2;
  let pre = Math.abs(y.length - n);

  let r = [];
  let tmp = 0;
  for (let i = n - 1; i >= 0; i--) {
    let op1 = x[i] || 0;
    let op2 = y[i - pre] || 0;
    let opr = parseInt(op1) + parseInt(op2) + tmp;
    tmp = 0;
    if (opr > 9) {
      let oprstr = opr.toString();
      r.unshift(parseInt(oprstr[1]));
      tmp = 1;
    } else {
      r.unshift(opr);
    }
  }
  if (tmp !== 0) {
    r.unshift(tmp);
  }
  return r.join('');
};

var addTwoNumbers = function(l1, l2) {
  let atxt = ll2num(l1);
  let btxt = ll2num(l2);
  let a = parseInt(atxt);
  let b = parseInt(btxt);
  let sum = a + b;
  let str;
  if (sum > Number.MAX_SAFE_INTEGER) {
    let res = calc(atxt, btxt);
    str = res;
  } else {
    str = sum.toString();
  }
  let c = str
    .split('')
    .reverse()
    .join('');
  let d = str2ll(c);
  return d;
};
