const router = require("express").Router();
const passport = require("passport");

router.get(
  "/spotify",
  passport.authenticate("spotify", {
    scope: [
      "user-read-private",
      "user-read-email",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-public",
      "playlist-modify-private",
      "user-library-read",
    ],
  })
);

// callback for spotify to redirect to
router.get(
  "/spotify/callback",
  passport.authenticate("spotify", {
    failureRedirect: "/spotify",
  }), (req, res) => {
    console.log(res.req.user)
    res.redirect(`http://localhost:3000/dashboard?access_token=${res.req.user.accessToken}`)
  }
);

module.exports = router;
