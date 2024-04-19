var chunk = function(arr, size) {
    if (size <= 0) {
        return [];
    }
    
    const chunkedArray = [];
    let index = 0;

    while (index < arr.length) {
        chunkedArray.push(arr.slice(index, index + size));
        index += size;
    }

    return chunkedArray;
};

// Test cases
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1,2,3],[4,5]]
console.log(chunk([1, 2, 3, 4, 5], 1)); // [[1],[2],[3],[4],[5]]
console.log(chunk([1, 2, 3, 4, 5], 7)); // [[1,2,3,4,5]]
console.log(chunk([], 2)); // []
console.log(chunk([1, 2, 3], 0)); // []