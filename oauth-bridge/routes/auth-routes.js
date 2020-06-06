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
      "user-library-read",
    ],
  })
);

// callback for spotify to redirect to
router.get(
  "/spotify/callback",
  passport.authenticate("spotify", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/spotify",
  })
);

module.exports = router;
