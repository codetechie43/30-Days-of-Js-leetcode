/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        // If there are no functions in the array, return the identity function
        if (functions.length === 0) {
            return x;
        }
        
        // Start with the input value
        let result = x;
        
        // Apply each function in the array to the result
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        
        return result;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * console.log(fn(4)); // Output: 9
 */
