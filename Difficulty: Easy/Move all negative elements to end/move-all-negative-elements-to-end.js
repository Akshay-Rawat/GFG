// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
    segregateElements(arr) {
        // code here
        let temp = [];

        // First collect all positive elements
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
                temp.push(arr[i]);
            }
        }

        // Then collect all negative elements
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                temp.push(arr[i]);
            }
        }

        // Copy back to original array
        for (let i = 0; i < arr.length; i++) {
            arr[i] = temp[i];
        }

    }
}
