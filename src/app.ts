import compression from 'compression'
import * as dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
// import cors from 'cors'

dotenv.config()

export const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

app.get('/', (req, res, next) => {
    next()
    return res.status(200).json({
        message: 'welcome',
    })
})
// app.use(cors())
// app.use(express.json())
