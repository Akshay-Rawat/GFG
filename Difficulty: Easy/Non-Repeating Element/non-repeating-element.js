// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    firstNonRepeating(arr) {
        const freq = {}
        // code here
        for(let i =0;i<arr.length;i++){
            const val = arr[i]
            freq[val]=(freq[val] || 0) + 1;
        }
        
        for(let i =0;i<arr.length;i++){
            if(freq[arr[i]]===1){
                return arr[i]
            }
        }
        return 0
    }
}
