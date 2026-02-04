/**
 *
 * insert
 * @param {number[]} arr
 * @param {number} i
 *
 * insertionSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution {
    insertionSort(arr) {
        // code here
        for(let i=0;i<arr.length;i++){
            let j =i
            while(j>0 &&arr[j-1]>arr[j]){
                const temp  = arr[j-1]
                arr[j-1]=arr[j]
                arr[j]=temp
                j--
            }
        }return arr
    }
}