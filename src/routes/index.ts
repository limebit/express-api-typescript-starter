import * as express from 'express'
import { Request, Response } from 'express'

export const indexRoutes = (): express.Router => {
  const router = express.Router()

  router.route('/').get((req: Request, res: Response) => {
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    res.status(200).send({
      message: 'GET request works!',
    })
  })

  return router
}
