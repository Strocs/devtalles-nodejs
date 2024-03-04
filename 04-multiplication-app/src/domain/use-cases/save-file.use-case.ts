import { mkdirSync, writeFileSync } from "fs"

export interface SaveFileCase {
  execute: (options: Options) => boolean
}


export interface Options {
  fileContent: string
  destination?: string
  fileName?: string
  fileType?: string
}


export class SaveFile implements SaveFileCase {
  constructor(
    //TODO: repository: StorageRepository
  ) { }


  execute({ fileContent, destination = 'outputs', fileName = 'table', fileType = 'txt' }: Options): boolean {

    try {
      mkdirSync(destination, { recursive: true })
      writeFileSync(`${destination}/${fileName}.${fileType}`, fileContent)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}