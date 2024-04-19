var flat = function (arr, n) {
    // Define the recursive flatten function
    function flatten(arr, depth) {
        if (depth >= n) {
            return arr;
        }
        let result = [];
        arr.forEach(item => {
            if (Array.isArray(item)) {
                result.push(...flatten(item, depth + 1));
            } else {
                result.push(item);
            }
        });
        return result;
    }
    
    // Call the flatten function with the input array and depth 0
    return flatten(arr, 0);
};
