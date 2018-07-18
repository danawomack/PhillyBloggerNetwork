const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({

  username: String,
  password: String
});

UserSchema.plugin(passportLocalMongoose);

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the Note model
module.exports = User;
