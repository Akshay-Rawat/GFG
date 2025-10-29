/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
    sort012(arr) {
        // code here
         let i =0,j=0;
        let k = arr.length-1
        while(i<=k){
            if(arr[i]==0){
                [arr[i],arr[j]] = [arr[j],arr[i]]
                i++
                j++
            }
            else if(arr[i]==2){
              [arr[i],arr[k]]=[arr[k],arr[i]]
              k--
            }
            else{
            i++;
            }
                
        }
    return arr
    }
}