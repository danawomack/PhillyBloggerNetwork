const db = require("../models");

// Defining methods for the PostsController
module.exports = {
  findAll: function(req, res) {
    console.log( 'finding all posts...' );
    console.log( req.query );
    db.Post
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => {
        console.log( 'model received' );
        res.json(dbModel);
      })
      .catch(err => {
        console.log( 'error received' );
        res.status(422).json(err)
      });
  },
  findById: function(req, res) {
    db.Post
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
