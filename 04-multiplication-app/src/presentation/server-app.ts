import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number
  limit: number
  showTable: boolean
  name: string
  destination: string
  fileType: string
}

export class ServerApp {
  static run({ base, limit, showTable, name, destination, fileType }: RunOptions) {
    console.log('Server is running...');

    const table = new CreateTable().execute({ base, limit })

    const wasCreated = new SaveFile().execute({ fileContent: table, fileName: `${name}-${base}`, fileType, destination })

    if (showTable) console.log(table)

    wasCreated
      ? console.log('File was created successfully.')
      : console.log('File was not created.')

    return table
  }
}