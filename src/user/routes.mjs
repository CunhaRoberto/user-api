
import * as CreateUsersController from './controllers/CreateUsersController.mjs'
import { Router } from 'express'

const router = Router()


router.route('/v1/user/').post(CreateUsersController.create)


export default router
