import { Schema, model } from 'mongoose'

const DOCUMENT_NAME = 'KeyToken'
const COLLECTION_NAME = 'KeyTokens'

const KeyTokenSchema: Schema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Shop', //link with Document name
        },

        publicKey: {
            type: String,
            required: true,
        },

        privateKey: {
            type: String,
            required: true,
        },

        refreshToken: {
            type: Array,
            default: [],
            required: true,
        },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
)

const KeyToken = model(DOCUMENT_NAME, KeyTokenSchema)
export default KeyToken
