import { sign, verify } from 'jsonwebtoken'

export const createTokenPair = async (
    payload: any,
    publicKey: string,
    privateKey: string
) => {
    try {
        const accessToken = sign(payload, publicKey, {
            expiresIn: '2 days',
        })

        const refreshToken = sign(payload, privateKey, {
            expiresIn: '7 days',
        })

        verify(accessToken, publicKey, (error, decode) => {
            if (error) console.log('erorr::', error)
            else console.log('decode::', decode)
        })

        return { accessToken, refreshToken }
    } catch (error) {
        console.log('erorr::', error)
    }
}
