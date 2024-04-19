var sortBy = function(arr, fn) {
  // Use Array.prototype.sort() with a custom comparison function
  return arr.sort((a, b) => {
      // Evaluate the output of fn for each element a and b
      const outputA = fn(a);
      const outputB = fn(b);
      // Compare the output values and return the result
      return outputA - outputB;
  });
};

// Test case
const arr = [5, 3, 8, 1];
const fn = num => num * 2;
console.log(sortBy(arr, fn)); // [1, 3, 5, 8]
