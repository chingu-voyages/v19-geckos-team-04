const express = require("express");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const passport = require('passport');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');

const app = express();

// set up cookies session
app.use(cookieSession({
    maxAge: process.env.COOKIE_AGE,
    keys: [process.env.COOKIE_KEY],
}))

// initialize passport
app.use(passport.initialize());

// passport cookie
app.use(passport.session());

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
