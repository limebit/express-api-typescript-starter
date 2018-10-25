import * as fs from 'fs'
import * as path from 'path'

export const flatten = (lists: any) => {
  return lists.reduce((a: any, b: any) => a.concat(b), [])
}

export const getDirectories = (srcpath: string) => {
  return fs
    .readdirSync(srcpath)
    .map(file => path.join(srcpath, file))
    .filter(path => fs.statSync(path).isDirectory())
}

export const getDirectoriesRecursive = (srcpath: string): string[] => {
  return [
    srcpath,
    ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive)),
  ]
}

export const filterSpecFiles = (dirs: string[]) => {
  let files: string[] = []
  dirs.map(dir => {
    fs.readdirSync(dir)
      .filter(function(file: string) {
        return file.substr(-8) === '.spec.ts'
      })
      .forEach(function(file: string) {
        files.push(path.join(dir, file))
      })
  })
  return files
}
