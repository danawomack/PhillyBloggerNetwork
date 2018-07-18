const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Posts collection and inserts the posts below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/phillyblogdb",
  {
    useMongoClient: true
  }
);

const postSeed = [
  {
    title: "Looking for a Photographer",
    author: "Jenny from the Block",
    body:
      "In need of a photog for a fun project downtown. Hoping to get it completed by next week. Pays $50",
    date: new Date(Date.now())
  },
  {
    title: "New Italian Restaurant",
    author: "Mike Jones",
    body:
      "New Italian restaurant in University City looking for a writer to come visit and share a review of our food. call 215.254-5358",
    date: new Date(Date.now())
  },
  {
    title: "Travel Blog looking for Philly B&B",
    author: "Evan on the Go",
    body:
      "I'll be in Philadelphia for 2 weeks. I'm looking for a comfortable Bed and Breakfast that's close to local attractions. You will also be featured on my blog.",
    date: new Date(Date.now())
  },

  {
    title: "Models Needed for Beauty blog",
    author: "Sandra Jackson",
    body: 
      "In need of 2 models asap. I have a feature to do on my new blog. Check it out here www.vogue.com",
    date: new Date(Date.now())

  }
  
];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    // console.log(data);
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
