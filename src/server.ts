import { App } from "./app";

const app = new App()
const PORT = 3000

app.app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT)
})
