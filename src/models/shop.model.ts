import { Schema, model } from 'mongoose'
import { ShopStatus } from '../shared/enums/shop.enum'

const DOCUMENT_NAME = 'shop'
const COLLECTION_NAME = 'Shops'

// Declare the Schema of the Mongo model
export const shopSchema: Schema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            require: true,
            maxLength: 150,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: Object.values(ShopStatus),
            default: ShopStatus.INACTIVE,
        },
        verify: {
            type: Schema.Types.Boolean,
            default: false,
        },
        roles: {
            type: Array,
            default: [],
        },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
)

//Export the model
const Shop = model(DOCUMENT_NAME, shopSchema)
export default Shop
