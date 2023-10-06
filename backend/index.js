const express = require('express')
const userRouter = require('./routes/user.routes')
const app = express()
const port = 8080

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/admin');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api', userRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))