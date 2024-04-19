class EventEmitter {
  constructor() {
      // Initialize an object to store event subscriptions
      this.subscriptions = {};
  }
  
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
      // If the event name doesn't exist in subscriptions, initialize it as an empty array
      if (!this.subscriptions[eventName]) {
          this.subscriptions[eventName] = [];
      }
      // Push the callback to the array of subscriptions for the given event
      this.subscriptions[eventName].push(callback);
      
      // Return an object with an unsubscribe method
      return {
          unsubscribe: () => {
              // Filter out the callback from the array of subscriptions
              this.subscriptions[eventName] = this.subscriptions[eventName].filter(cb => cb !== callback);
              // Return undefined
              return undefined;
          }
      };
  }
  
  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
      // If there are no callbacks subscribed to the given event, return an empty array
      if (!this.subscriptions[eventName]) {
          return [];
      }
      
      // Iterate over each callback subscribed to the event and call it with the provided arguments
      return this.subscriptions[eventName].map(callback => callback(...args));
  }
}

// Test the EventEmitter class
const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99; }
const sub = emitter.subscribe('onClick', onClickCallback);

// Emit the onClick event
console.log(emitter.emit('onClick')); // [99]

// Unsubscribe from the onClick event
sub.unsubscribe();

// Emit the onClick event again (should return an empty array)
console.log(emitter.emit('onClick')); // []
