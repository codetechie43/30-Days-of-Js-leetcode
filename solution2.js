/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;

    return function() {
        return count++;
    };
};

/** 
 * const counter = createCounter(10)
 * console.log(counter()) // Output: 10
 * console.log(counter()) // Output: 11
 * console.log(counter()) // Output: 12
 */
