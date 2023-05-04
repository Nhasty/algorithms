/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    
    
    var merge = function(a, b){
        
        if( a == null ){
            return b;
        }else if( b == null ){
            return a;
        }
        
        if( a.val < b.val ){
            a.next = merge(a.next, b);
            return a;
        }else{
            b.next = merge(a, b.next);
            return b;
        }
        
    }
    
    // ------------------------------
    
    // Base case:
    
    if( head == null ){
        
        // Empty linked list
        return null;
        
    }else if ( head.next == null ){
        
        // Linked list with one node only
        return head;
    }
    
    
    
    // General cases:
    let [prev, slow, fast] = [null, head, head];
    
    while( (fast != null) && (fast.next != null) ){
        
        //[prev, slow, fast] = [slow, slow.next, fast.next.next];
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    

    // cut the linkage on midpoint
    if( prev != null ){
        prev.next = null;    
    }
    
    
    // sort by divide and conquer
    let firstHalf = sortList(head);
    let secondHalf = sortList(slow);
    
    
    result = merge( firstHalf, secondHalf );
    
    
    return result;
};
