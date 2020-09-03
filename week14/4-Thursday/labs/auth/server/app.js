const express = require('express')
const app = express()

const jwt = require('jwt-simple')

// let userInfo = {
//     id: '12345',
//     userName: 'Jeremy',
//     email: 'me@me.com'
// }

// let token = (userInfo) => {
    
//     let timeStamp = new Date().getTime()

//     return jwt.encode({sub: userInfo.id, iat: timeStamp}, "ouahfkaf", "HS256")
// }

// console.log(token(userInfo))

// let tokenID = token(userInfo)

// console.log(jwt.decode(tokenID))


app.use(require('./routes/authentication'))

app.get('/hello', (req, res) => {
    res.send('Hello')
})


app.listen(3001, () => {
    console.log(`listening on port 3001`)
})