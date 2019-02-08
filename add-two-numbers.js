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
    if (ll === null) { return '' }
    return ll2num(ll.next) + ll.val
};

var str2ll = function(str) {
    if(str.length === 0){
        return null
    }
    let n =parseInt(str[0])
    let cnode = new ListNode(n)
    cnode.next = str2ll(str.slice(1))
    return cnode
}

var calc = function(a, b) {
  let x = a.split('')
  let y = b.split('')
  let arr=x.length>y.length?x:y
  let arr2 = x.length<y.length?x:y
  if(x.length === y.length){
    arr = x
    arr2 = y
  }
  let n = arr.length
  let diff = arr.length - arr2.length
  for(let i=0;i<diff;i++){
    arr2.unshift(0)
  }
  x = arr
  y = arr2
      
  let r = [], tmp = 0
  for (let i=n-1;i>=0;i--){
    let op1 = x[i] || 0
    let op2 = y[i] || 0
    let opr = parseInt(op1) + parseInt(op2) + tmp
    tmp = 0
    if (opr > 9){
      let oprstr = opr.toString()
      r.unshift(parseInt(oprstr[1]))
      tmp = 1
    }else{
      r.unshift(opr)
    }
  }
  if (tmp!==0) {
    r.unshift(tmp)
  }  
  return r.join('')
};

var addTwoNumbers = function(l1, l2) {
    let atxt = ll2num(l1)
    let btxt = ll2num(l2)
    let a = parseInt(atxt)
    let b = parseInt(btxt)
    let sum = a+b
    if(sum > Number.MAX_SAFE_INTEGER){
        let x = a.toString().length
        let xstr = btxt
        let arrA = atxt.split('')
        let arrB = btxt.split('')
        let res = calc(atxt, btxt)
        return str2ll(res.split('').reverse().join(''))
    }
    let c = (a+b).toString().split('').reverse().join('')
   let d = str2ll(c)
    return d
};
