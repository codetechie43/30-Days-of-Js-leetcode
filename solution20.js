var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).length === 0;
    } else {
        return true; // Return true for non-object/non-array values
    }
};

// Test cases
console.log(isEmpty({})); // true
console.log(isEmpty([])); // true
console.log(isEmpty({ key: 'value' })); // false
console.log(isEmpty([1, 2, 3])); // false
console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty(42)); // true
console.log(isEmpty('string')); // true
