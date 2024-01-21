import { Router } from 'express'
import { AccessController } from '../../controllers/access.controller'

const routerAccess = Router()

routerAccess.post('/shop/signup', AccessController.signUp)

export default routerAccess
