var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        functions.forEach((func, index) => {
            func().then(
                result => {
                    results[index] = result;
                    completed++;
                    if (completed === functions.length) {
                        resolve(results);
                    }
                },
                error => {
                    reject(error);
                }
            );
        });
    });
};

// Test code
const promise = promiseAll([() => new Promise(res => res(42))]);
promise.then(console.log); // [42]
