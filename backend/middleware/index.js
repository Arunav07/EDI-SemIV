const express = require('express')
const logger = require('morgan')

const initMiddleware = app => {

    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(logger('dev'));

}

module.exports = initMiddleware