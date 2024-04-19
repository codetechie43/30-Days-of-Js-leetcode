/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;

    return {
        increment: function() {
            return ++count;
        },
        decrement: function() {
            return --count;
        },
        reset: function() {
            count = init;
            return count;
        }
    };
};

/**
 * const counter = createCounter(5)
 * console.log(counter.increment()); // Output: 6
 * console.log(counter.reset());     // Output: 5
 * console.log(counter.decrement()); // Output: 4
 */
