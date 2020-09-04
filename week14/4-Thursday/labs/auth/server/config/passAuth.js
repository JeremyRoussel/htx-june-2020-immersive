const passport = require('passport')
const db = require('../models')
const LocalStrategy = require('passport-local').Strategy
const bcrpyt = require('bcryptjs')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('../config')

let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}

let jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

    //payload has object with keys of 'sub' and ''
    db.user.findByPk(payload.sub)
        .then(foundUser => {

            // if user is found
            if(foundUser){
                done(null, foundUser)
            }
            // incorrect token
            else {
                done(null, false)
            }
        })
        // Database error
        .catch(err => {
            return done(err, false)
        })
}) 


let options = {usernameField: 'email'};

// If authentication fails, Passport will respond with a 401 Unauthorized status, 
// and any additional route handlers will not be invoked.

// If authentication succeeds, the next handler will be invoked and the req.user property
// will be set to the authenticated user.

// Passport scrapes header info from request

// options are optional, done is the return
let localLogin = new LocalStrategy(options, (email, password, done) => {

    // check to see if email exists in database

    db.user.findAll({where: {email}})
        .then(results => {
            // check to see if there in an email, return error if not

            if (results != null){
                //compare passwords
                let user = results[0]

                bcrpyt.compare(password, user.password, (err, isMatch) => {
                    if(err) {
                        //error in compare function
                        return done(err)
                    }
                    if (!isMatch) {
                        // password does not match
                        return done(null, false)
                    }
                    // pass back user object
                    return done(null, true)
                })
            }
            else {
                //no email was found, send error
            }
        })
        // database error
        .catch(err => {
            return done(err)
        })

}) 


passport.use(localLogin)
passport.use(jwtLogin)