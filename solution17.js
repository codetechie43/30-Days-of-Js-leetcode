class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const expirationTime = Date.now() + duration;
        const existingEntry = this.cache.get(key);

        if (existingEntry && existingEntry.expirationTime > Date.now()) {
            existingEntry.value = value;
            existingEntry.expirationTime = expirationTime;
            return true;
        } else {
            this.cache.set(key, { value, expirationTime });
            return false;
        }
    }

    get(key) {
        const entry = this.cache.get(key);
        if (entry && entry.expirationTime > Date.now()) {
            return entry.value;
        } else {
            return -1;
        }
    }

    count() {
        let count = 0;
        const currentTime = Date.now();
        for (const entry of this.cache.values()) {
            if (entry.expirationTime > currentTime) {
                count++;
            }
        }
        return count;
    }
}

// Test code
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
