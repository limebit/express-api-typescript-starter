import * as express from 'express'
import { UserController } from '../controllers/userController'

const controller = new UserController()

export const userRoutes = (): express.Router => {
  const router = express.Router()

  router
    .route('/user')
    .get(controller.getUsers)
    .post(controller.addNewUser)

  router
    .route('/user/:userId')
    .get(controller.getUserById)
    .put(controller.updateUser)
    .delete(controller.deleteUser)

  return router
}
