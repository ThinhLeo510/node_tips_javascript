import { app } from './src/app'
import configDatabase from './src/configs/database.config'

const server = app.listen(configDatabase.app.port, () => {
    console.log(`server listen port ${configDatabase.app.port}`)
})

process.on('SIGINT', () => {
    server.close(() => {
        console.log(`Exit Server Express`)
    })
})
