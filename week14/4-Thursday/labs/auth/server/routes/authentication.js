let express = require('express');
let router = express.Router();

const jwt = require('jwt-simple')
const config = require('../config')

let db = require('../models')

let bodyParser = require('body-parser')
const bcrpyt = require('bcryptjs')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

let passport = require('passport')

let passportService = require('../config/passAuth.js')

let requireSignin = passport.authenticate('local', {session: false})

let requireAuth = passport.authenticate('jwt', {session: false})

let token = (userInfo) => {

    let timeStamp = new Date().getTime();

    return jwt.encode({sub: userInfo.id, iat: timeStamp}, config.secret, "HS256")
}

router.get('/', requireAuth, (req, res) => {

    res.send('Hello, You are logged-in')
})

router.post('/signin', requireSignin, (req, res) => {
    // need to handle bcrypt error, password !match, password success, database error


    // Success case
    res.json({token: token(req.user)})
})

router.post('/signup', (req, res) => {

    let email = req.body.email;
    
    // hash and salt
    let password = bcrpyt.hashSync(req.body.password, 8);

    db.user.findAll({where: {email: email}})
        .then(results => {
            if(results.length === 0){
                // no duplicates found
                db.user.create({email, password})
                    .then(user => {
                          
                        //on success, return json web token
                        return res.json({token: token({id: user.dataValues.id})})

                    })
                    .catch(err => {
                        res.status(423).send({error: 'Failed to add to database'})
                    })
            }
            else {
                //duplicates have been found

                return res.status(422).send({error: 'Email already exists'})
            }
        })
})

module.exports = router;