
//import * as CreateUsersController from './controllers/CreateUsersController.mjs'
import * as SearchPropertyController from './controllers/SearchPropertyController.mjs'
//import * as UpdateUsersController from './controllers/UpdateUsersController.mjs'
//import * as DeleteUsersController from './controllers/DeleteUsersController.mjs'

import { Router } from 'express'

const router = Router()


// router.route('/property/').post(CreateUsersController.create)
router.route('/property/').get(SearchPropertyController.search)
// router.route('/property/id').get(SearchUsersController.searchById)
// router.route('/property/id').put(UpdateUsersController.update)
// router.route('/property/id').delete(DeleteUsersController.remove)


export default router
