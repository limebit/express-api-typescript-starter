import { App, appConfigOptions } from './app'
import { mongoTestUrl } from './config/config'

const Mocha = require('mocha')

import { getDirectoriesRecursive, filterSpecFiles } from './helpers/directories'
const configOptions: appConfigOptions = {
  mongoDbUrl: mongoTestUrl,
}

const app = new App(configOptions)
const PORT = 4000

app.app.listen(PORT, () => {
  console.log('Express Test server listening on port ' + PORT)
})
export default app.app

var rootDir = 'src/'

const dirs = getDirectoriesRecursive(rootDir)

const specFiles = filterSpecFiles(dirs)

const mocha = new Mocha()

specFiles.forEach(function(file: string) {
  mocha.addFile(file)
})

mocha.run(function(failures: number) {
  process.exitCode = failures ? 1 : 0
})
