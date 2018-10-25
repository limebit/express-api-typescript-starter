import * as mongoose from 'mongoose'

export const compareResponseWithSchema = (
  jsonObject: Object,
  schema: mongoose.Schema,
) => {
  schema.eachPath(path => {
    if (!(path in jsonObject))
      throw new Error(
        `key ${path} not in response body` + JSON.stringify(jsonObject),
      )
  })
}
