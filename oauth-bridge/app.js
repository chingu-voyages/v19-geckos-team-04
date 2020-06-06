const express = require("express");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

// initialize passport
app.use(passport.initialize());

// connect to mongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to mongoDB.')
})

//set up routes
app.use("/auth", authRoutes);

const port = 8888;

app.listen(port, () =>
  console.log(
    `Listening on port ${port}. Go to /login to initiate authentication.`
  )
);
