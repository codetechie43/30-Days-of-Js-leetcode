/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Wait for both promises to resolve using Promise.all()
    const [value1, value2] = await Promise.all([promise1, promise2]);
    // Calculate the sum of the resolved values
    const sum = value1 + value2;
    // Return a new promise that resolves with the sum
    return sum;
};

// Example usage:
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // 4
