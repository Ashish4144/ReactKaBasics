const express = require('express')
const app = express()
const loginRoute = require('./routes/login')
const cors = require('cors')
const dbConnect = require('./database/db')


app.get('/',(req,res) => {
    res.send('Hello World!');
})

app.use(cors())

app.use(express.json())

app.use('/',loginRoute);


app.listen(3000, () => {
    dbConnect();
  console.log('Server is running on port 3000')
})