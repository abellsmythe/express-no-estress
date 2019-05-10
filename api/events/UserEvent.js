// Event Emitter
const eventEmitter = require("../helpers/event-emitter");

// Create User
eventEmitter.on('User-Created', (data) => {
  console.log('User Created', data);
});

// Update User
eventEmitter.on('User-Updated', (data) => {
  console.log('User Updated', data);
});

// Delete User
eventEmitter.on('User-Deleted', (data) => {
  console.log('User Deleted', data);
});