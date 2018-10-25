import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import { mongoUrl } from './config/config'
import { userRoutes } from './routes/user'
import { indexRoutes } from './routes/index'

export interface appConfigOptions {
  mongoDbUrl: string
}
export class App {
  public app: express.Application

  constructor(configOtions?: appConfigOptions) {
    this.app = express()
    this.config()

    // configure routes here
    this.app.use(indexRoutes())
    this.app.use(userRoutes())

    mongoose.connect((configOtions && configOtions.mongoDbUrl) || mongoUrl)
  }

  private config(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    // serve static files under {HOST}/static/{FILENAME} from /public directory
    this.app.use('/static', express.static('public'))
  }
}
