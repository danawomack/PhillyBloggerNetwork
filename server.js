const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//below added for heroku deployment
const path = require("path")


const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
//below added for heroku deployment
// app.use(express.static(path.join(__dirname, "client", "build")))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("express-session")({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



//passport config
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// // Add routes, both API and view
const routes = require("./routes/auth-api");
const post_routes = require("./routes/posts-api");

app.use(routes);
app.use(post_routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  //use this in development
  //res.sendFile(path.join(__dirname, "./client/public/index.html"));
  //change to this in production
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/phillyblogdb");

//below added for heroku deployment
// app.get("*", (req, res) => {  
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  console.log(`🌎  ==> http://localhost:${PORT}!`);
});


//serving public static files express serving public files