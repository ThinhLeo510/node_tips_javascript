import * as dotenv from 'dotenv'

dotenv.config()

interface ConfigDatabase {
    app: {
        port: string | number
    }
    db: {
        host: string
        port: number | string
        name: string
    }
}

const dev: ConfigDatabase = {
    app: {
        port: process.env.DEV_APP_PORT ?? 3055,
    },
    db: {
        host: process.env.DEV_MONGOOSE_HOST ?? '127.0.0.1',
        port: process.env.DEV_MONGOOSE_PORT ?? 27017,
        name: process.env.DEV_MONGOOSE_DATABASE ?? '',
    },
}

const pro = {
    app: {
        port: process.env.PRO_APP_PORT ?? 3055,
    },
    db: {
        host: process.env.PRO_MONGOOSE_HOST ?? '127.0.0.1',
        port: process.env.PRO_MONGOOSE_PORT ?? 27017,
        name: process.env.PRO_MONGOOSE_DATABASE ?? '',
    },
}

const configs: Record<string, ConfigDatabase> = { dev, pro }

const env = process.env.NODE_ENV ?? 'dev'

const configDatabase: ConfigDatabase = configs[env]

export default configDatabase
