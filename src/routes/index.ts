import { Router } from 'express'
import routerAccess from './access'

const router = Router()

router.use('/v1/api', routerAccess)

export default router
