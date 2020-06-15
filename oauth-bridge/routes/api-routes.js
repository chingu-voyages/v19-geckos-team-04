const router = require('express').Router();

router.post('/saved-playlist', (req, res) => {
    console.log(req.body);
    res.send({'type': 'POST'})
})

module.exports = router;