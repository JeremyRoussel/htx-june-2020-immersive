
const passport = require('passport');
const db = require('../models');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');


let options = { usernameField: 'email' };

//passport is scraping header info from request
let localLogin = new LocalStrategy(options, (email, password, done) => {


    // check to see if email is in our database 

    db.user.findAll({ where: { email: email } })
        .then(results => {
            //check to see if there is an email.  If no email, then invalid login

            if (results != null) {
                // compare passwords
                let user = results[0];

                bcrypt.compare(password, user.password, (err, isMatch) => {

                    //couldn't compare passwords
                    if (err) {
                        return done(err)
                    }

                    //mismatch database
                    if (!isMatch) {
                        return done(null, false)
                    }

                    //valid user
                    return done(null, user)
                })

            }
            else {
                // no email was found, exit with error
                return done(null, false)
            }
        })
        .catch(err => {
            return done(err);
        })


})


passport.use(localLogin);