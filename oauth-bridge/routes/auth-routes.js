const router = require('express').Router();
const passport = require('passport');

router.get('spotify', passport.authenticate('spotify', {
    scope: ['profile']
}))

// callback for spotify to redirect to
router.get('spotify/callback', passport.authenticate('spotify', {
    successRedirect: 'http://localhost:8888/callback',
    failureRedirect: 'spotify'
}))

module.exports = router;