const { UserModel } = require("../models");

// Event Emitter
const eventEmitter = require("../helpers/event-emitter");

// Create User
exports.create = (data, cb) => {
  UserModel.findOne(data)
    .exec((err, exist) => {
      if (!exist) {
        UserModel.create(data, (err, res) => {
          if (err) {
            cb({ message: 'An error has occured ' + err });
          } else {
            cb(null, res);
            eventEmitter.emit('User-Created', res);
          }
        });
      } else {
        cb({ message: 'User already exist' });
      }
    });
};

// Read All Users
exports.readAll = (search, cb) => {
  UserModel.searchByAttributes(search).exec((err, data) => {
    if (err) {
      cb({ message: 'An error has occured ' + err });
    } else {
      cb(null, data);
    }
  });
};

// Read User
exports.read = (id, cb) => {
  UserModel.findOne({ _id: id }).exec((err, data) => {
    if (err) {
      cb({ message: 'An error has occured ' + err });
    } else {
      cb(null, data);
    }
  });
};

// Update User
exports.update = (id, data, cb) => {
  UserModel.findOneAndUpdate({ _id: id }, data, { new: true })
    .exec((err, data) => {
      if (err) {
        cb({ message: 'An error has occured ' + err });
      } else {
        cb(null, data);
        eventEmitter.emit('User-Updated', data);
      }
    });
};

// Delete User
exports.delete = (id, cb) => {
  UserModel.findOneAndRemove({ _id: id }, (err, data) => {
    if (err) {
      cb({ message: 'An error has occured ' + err });
    } else {
      cb(null, 'User ' + data._id + ' deleted!');
      eventEmitter.emit('User-Deleted', data);
    }
  });
};

