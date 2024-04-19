class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    valueOf() {
        // Calculate the sum of all elements in the array
        return this.nums.reduce((acc, curr) => acc + curr, 0);
    }

    toString() {
        // Convert the array to a comma-separated string surrounded by brackets
        return `[${this.nums.join(',')}]`;
    }
}

// Test the ArrayWrapper class
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

// When two instances of ArrayWrapper are added together with the + operator, the resulting value is the sum of all the elements in both arrays
console.log(obj1 + obj2); // 10

// When the String() function is called on the instance, it will return a comma-separated string surrounded by brackets
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"