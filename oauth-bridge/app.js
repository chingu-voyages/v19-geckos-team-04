const express = require("express");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const passport = require('passport');

const app = express();

app.use(passport.initialize());

app.use("/auth", authRoutes);

const port = 8888;

app.listen(port, () =>
  console.log(
    `Listening on port ${port}. Go to /login to initiate authentication.`
  )
);
