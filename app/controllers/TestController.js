const { TestModel } = require("../models");

// Create Test
exports.create = (req, res) => {
  const data = req.body;
  TestModel.findOne({
    description: data.description,
  }).exec((err, exist) => {
    if (!exist) {
      TestModel.create(data, (err, data) => {
        if (err) {
          res.status(500).json({
            error: true,
            message: 'An error has occured ' + err
          });
        } else {
          res.status(200).json(data);
        }
      });
    } else {
      res.status(400).json({
        error: true,
        message: 'Test already exist'
      });
    }
  });
};

// Read All Tests
exports.readAll = (req, res) => {
  let query = {};
  const search = req.params.search;
  if (search) {
    query = {
      $or: [
        { description: { $regex: search, $options: "i" } }
      ]
    };
  }
  TestModel.find(query).exec((err, data) => {
    if (err) {
      res.status(500).json({
        error: true,
        message: 'An error has occured ' + err
      });
    } else {
      res.status(200).json(data);
    }
  });
};

// Read Test
exports.read = (req, res) => {
  TestModel.findOne({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      res.status(500).json({
        error: true,
        message: 'An error has occured ' + err
      });
    } else {
      res.status(200).json(data);
    }
  });
};

// Update Test
exports.update = (req, res) => {
  const data = req.body;
  TestModel.findOneAndUpdate({ _id: req.params.id }, data, { new: true })
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: true,
          message: 'An error has occured ' + err
        });
      } else {
        res.status(200).json(data);
      }
    });
};

// Delete Test
exports.delete = (req, res) => {
  TestModel.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: true,
        message: 'An error has occured ' + err
      });
    } else {
      res.status(200).json('Test ' + data._id + ' deleted!');
    }
  });
};
