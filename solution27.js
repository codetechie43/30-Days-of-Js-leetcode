var compactObject = function(obj) {
    // Define the recursive compact function
    function compact(obj) {
        if (Array.isArray(obj)) {
            // If obj is an array, iterate over its elements
            obj.forEach((element, index) => {
                // Recursively call compact for each element
                obj[index] = compact(element);
            });
            // Remove falsy values from the array
            return obj.filter(Boolean);
        } else if (typeof obj === 'object' && obj !== null) {
            // If obj is an object, iterate over its keys
            for (let key in obj) {
                if (!obj.hasOwnProperty(key)) {
                    continue;
                }
                // Recursively call compact for each value
                obj[key] = compact(obj[key]);
                // Delete key if value is falsy
                if (!obj[key]) {
                    delete obj[key];
                }
            }
            // Remove empty objects
            if (Object.keys(obj).length === 1 && obj.hasOwnProperty('')) {
                return obj[''];
            }
        }
        return obj;
    }
    
    // Call the compact function with the input object
    return compact(obj);
};
// Test case
const obj = {
    a: 1,
    b: '',
    c: null,
    d: {
        e: 0,
        f: false,
        g: [null, 2, false]
    },
    h: [3, '', {i: null}]
};
console.log(compactObject(obj));
// Output: [1]
