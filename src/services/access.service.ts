import { hash } from 'bcrypt'
import Shop from '../models/shop.model'
import { randomBytes } from 'crypto'
import { KeyTokenService } from './keyToken.service'
import { createTokenPair } from '../auth/authUtils'
import { RoleShop } from '../shared/enums/roles.enum'
import { getInforData } from '../utils/response.util'

export type SignUpDto = {
    name: string
    email: string
    password: string
}

export class AccessService {
    static signUp = async (signUpDto: SignUpDto) => {
        try {
            console.log(signUpDto)
            const shop = await Shop.findOne({
                email: signUpDto.email,
            }).lean()

            console.log(shop)
            if (shop) {
                return {
                    code: 'xxx',
                    message: ' Shop existed!',
                }
            }

            const passwordHash = await hash(signUpDto.password, 10)

            const newShop = await Shop.create({
                name: signUpDto.name,
                email: signUpDto.email,
                roles: [RoleShop.SHOP],
                password: passwordHash,
            })

            if (newShop) {
                const publicKey = randomBytes(64).toString('hex')
                const privateKey = randomBytes(64).toString('hex')

                const keyStore = await KeyTokenService.createKeyToken({
                    userId: newShop._id,
                    publicKey,
                    privateKey,
                })

                if (!keyStore) {
                    return {
                        code: 'xxx',
                        message: ' keyStore error!',
                    }
                }

                const tokens = await createTokenPair(
                    { newShop },
                    publicKey,
                    privateKey
                )

                console.log('tokens::', tokens)

                return {
                    code: 201,
                    metadata: {
                        shop: getInforData({
                            fields: ['_id', 'name', 'email'],
                            object: newShop,
                        }),
                        tokens,
                    },
                }
            }

            return {
                code: 200,
                metadata: null,
            }
        } catch (error) {
            return {
                code: 'xxx',
                message: error,
                status: 'error',
            }
        }
    }
}
