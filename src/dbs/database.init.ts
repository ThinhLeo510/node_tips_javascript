import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import configDatabase from '../configs/database.config'

dotenv.config()

class Database {
    private static instance: Database

    constructor() {
        this.connect()
    }

    async connect() {
        const connectString = `mongodb://${configDatabase.db.host}:${configDatabase.db.port}/${configDatabase.db.name}`
        await mongoose
            .connect(connectString)
            .then(() => console.log('connected successly!'))
            .catch((error) =>
                console.log(`connect failed with error: ${error}`)
            )

        if (process.env.NODE_ENV == 'dev') {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }
    }

    static getInstant() {
        if (!this.instance) {
            this.instance = new Database()
        }

        return this.instance
    }
}

const instanceMongoose = Database.getInstant()

export default instanceMongoose
