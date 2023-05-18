const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config();
require('./database/database')
const port = process.env.port
app.use(express.json());
const errorMiddleware = require('./middlewares/errors')
// Import all routes
const auth = require('./routes/auth')

// Routing
app.use('/api/auth', auth)


app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})

// Middleware to handle errors
app.use(errorMiddleware)