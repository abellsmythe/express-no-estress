const { UserService } = require("../services");

const responseHandler = res => (err, response) => {
  if (err) {
    res.status(500).json(err);
  } else {
    res.status(200).json(response);
  }
};

// Create User
exports.create = (req, res) => {
  const data = req.body;

  UserService.create(data, responseHandler(res));
};

// Read All Users
exports.readAll = (req, res) => {
  UserService.readAll(req.params.search, responseHandler(res));
};

// Read User
exports.read = (req, res) => {
  UserService.read(req.params.id, responseHandler(res));
};

// Update User
exports.update = (req, res) => {
  const data = req.body;

  UserService.update(req.params.id, data, responseHandler(res));
};

// Delete User
exports.delete = (req, res) => {
  UserService.delete(req.params.id, responseHandler(res));
};
