import { app } from './src/app'

const server = app.listen(3055, () => {
    console.log(`server listen port 3055`)
})

process.on('SIGINT', () => {
    server.close(() => {
        console.log(`Exit Server Express`)
    })
})
