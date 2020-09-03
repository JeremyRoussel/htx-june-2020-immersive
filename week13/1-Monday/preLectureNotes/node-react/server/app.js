
let express = require('express');
let app = express();

//middleware to set response headers
//api
app.use((req, res, next)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");

    next();

})

app.get('/api', (req, res) => {

    res.json([{
        id: 1,
        username: 'Jeremy'
    }, {
        id: 2,
        username: 'Cainan'
    },
    {
        id: 3,
        username: 'Woody'
    }
    ])

})

app.listen(3001, () => {

    console.log(`listening on port 3001`)
})