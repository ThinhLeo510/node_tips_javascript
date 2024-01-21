import compression from 'compression'
import * as dotenv from 'dotenv'
import express, { json, urlencoded } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import instanceMongoose from './dbs/database.init'
import router from './routes'

dotenv.config()

export const app = express()

// init package
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(json())
app.use(
    urlencoded({
        extended: true,
    })
)

// init database
instanceMongoose

// init router
app.use('/', router)
