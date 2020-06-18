const router = require('express').Router();
const User = require('../models/user-models');

router.post('/saved-playlist', (req, res) => {

    res.send(req.body.spotifyID)

    const idMaker = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);;
    const uniqueId = `${idMaker()}${idMaker()}${idMaker()}${idMaker()}${idMaker()}${idMaker()}`;

    User.findOneAndUpdate({ spotifyID: req.body.spotifyID }, {
        $push: {
            playlist: [
                {
                id: uniqueId,
                title: req.body.title,
                songs: req.body.songs,
                }
            ]
        }
    })
    .catch(error => console.error(`Error: ${error}`))
})

router.get('/playlist/:spotifyID', (req, res) => {
    User.findOne({ spotifyID: req.params.spotifyID })
    .then(user => res.json(user.playlist))
})

module.exports = router;