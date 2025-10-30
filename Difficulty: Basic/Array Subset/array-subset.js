// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean}
 */

class Solution {
    isSubset(a, b) {
        // Your code here
        a.sort((x, y) => x - y);
        b.sort((x, y) => x - y);
        let i = 0
        let j = 0
     
        while(i<a.length && j<b.length){
            if(b[j]==a[i]){
                j++
            }
                i++
            
        }
     return j===b.length
    }
}