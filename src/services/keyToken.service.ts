import KeyToken from '../models/keyToken.model'

export class KeyTokenService {
    static createKeyToken = async ({ userId, publicKey, privateKey }: any) => {
        try {
            // const publicKeyString = publicKey.toString()
            const token = await KeyToken.create({
                user: userId,
                publicKey,
                privateKey,
            })
            return token ? token.publicKey : null
        } catch (error) {
            return error
        }
    }
}
