const express = require('express');
const router = express.Router();
const auth = require('../auth/index');


router.get('/protected', auth, (req, res) => {

    res.send(`I'm a protected route`)
})


module.exports = router;