const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const connectDB = require('./config/db')
const cors = require("cors");
const app = express()

app.use(cors());

connectDB();
dotenv.config()

module.exports  = app