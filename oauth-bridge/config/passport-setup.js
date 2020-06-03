const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const dotenv = require('dotenv').config();

passport.use(
    new SpotifyStrategy({
        callbackURL: '/auth/spotify/callback',
        clientID: 'dce40b7252ab4435b3842ec305b2c49d',
        clientSecret: '83772a4497c74d66adc421392646f72f',
    },
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
    })
)