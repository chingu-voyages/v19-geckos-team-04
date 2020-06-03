const router = require('express').Router();
const passport = require('passport');

router.get('/spotify', passport.authenticate('spotify', {
    scope: ['user-read-private', 'user-read-email']
}))

// callback for spotify to redirect to
router.get('/spotify/callback', passport.authenticate('spotify', { successRedirect: 'http://localhost:3000/', failureRedirect: '/auth/spotify' }))

module.exports = router;