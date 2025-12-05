/**
 * @param {number} num
 * @returns {number}
 */
class Solution {
    convertFive(num) {
        // code here
        return Number(num.toString().replace(/0/g, '5'));

    }
}