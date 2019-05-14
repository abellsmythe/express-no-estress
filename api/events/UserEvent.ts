// Event Emitter
import eventEmitter from '../helpers/event-emitter';

// Create User
eventEmitter.on('User-Created', (data) => {
  // tslint:disable-next-line no-console
  console.log('User Created', data);
});

// Update User
eventEmitter.on('User-Updated', (data) => {
  // tslint:disable-next-line no-console
  console.log('User Updated', data);
});

// Delete User
eventEmitter.on('User-Deleted', (data) => {
  // tslint:disable-next-line no-console
  console.log('User Deleted', data);
});
