/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let cancelled = false;

    const cancelFn = () => {
        cancelled = true;
    };

    setTimeout(() => {
        if (!cancelled) {
            fn(...args);
        }
    }, t);

    return cancelFn;
};
