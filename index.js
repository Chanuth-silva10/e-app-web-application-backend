const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 8080 || process.env.PORT
