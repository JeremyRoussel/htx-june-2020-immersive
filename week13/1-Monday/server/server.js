let express = require('express');
let app = express();

let dataArray = [
    {id: 1,
    username: "Jeremy"
},
    {id: 2,
    username: "Cainan"
},
    {id: 3,
    username: "Woody"
},
    {id: 4,
    username: "Micah"
},
]

app.get('/api', (req, res) => {
    res.json(dataArray)
})

app.listen(3001, () => {
  
    console.log(`listening on port 3001`)
})