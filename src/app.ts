import compression from 'compression'
import * as dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import instanceMongoose from './dbs/database.init'

dotenv.config()

export const app = express()

// init package
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// init database
instanceMongoose

app.get('/', (req, res, next) => {
    next()
    return res.status(200).json({
        message: 'welcome',
    })
})
