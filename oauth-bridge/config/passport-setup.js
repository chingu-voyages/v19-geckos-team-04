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
        // check if user already exists in database
        console.log(profile);
        User.findOne({ spotifyID: profile.id }).then((currentUser) => {
            currentUser
            ? done(null, currentUser)
            : new User({
                username: profile.username,
                spotifyID: profile.id,
                email: profile.email,
                })
                .save()
                .then((newUser) => {
                    console.log(`new user created: ${newUser}`);
                    done(null, newUser);
                });
        });
    }
  )
);
