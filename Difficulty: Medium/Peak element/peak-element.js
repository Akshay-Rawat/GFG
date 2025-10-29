class Solution {
    peakElement(arr) {
        let low = 0, high = arr.length - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            let left = mid === 0 ? -Infinity : arr[mid - 1];
            let right = mid === arr.length - 1 ? -Infinity : arr[mid + 1];

            if (arr[mid] > left && arr[mid] > right) {
                return mid; // Found a peak
            } else if (arr[mid] < right) {
                low = mid + 1; // Move right
            } else {
                high = mid - 1; // Move left
            }
        }

        return -1; 
    }
}