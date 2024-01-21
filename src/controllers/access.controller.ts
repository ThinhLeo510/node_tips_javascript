import { StatusCodes } from 'http-status-codes'
import { AccessService } from '../services/access.service'

export class AccessController {
    static signUp = async (req: any, res: any, next: any) => {
        try {
            console.log('[P]::signUp::', req.body)
            res.status(StatusCodes.CREATED).json(
                await AccessService.signUp(req.body)
            )
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}
