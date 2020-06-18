const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const dotenv = require("dotenv").config();
const User = require('../models/user-models');

// serialize user for cookie session
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => done(null, user));
  });

passport.use(
  new SpotifyStrategy(
    {
      callbackURL: "/auth/spotify/callback",
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOneAndUpdate({ spotifyID: profile.id, username: profile.username, email: profile._json.email, playlist: [], }, 
        { accessToken: accessToken },  
        { upsert: true, new: true, setDefaultsOnInsert: true })
        .then(currentUser => done(null, currentUser))
    }
  )
);
