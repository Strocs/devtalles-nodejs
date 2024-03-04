interface CreateTableOptions {
  base: number
  limit?: number
}

export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string
}

export class CreateTable implements CreateTableUseCase {
  //* Primer método que se ejecuta al construir la instancia de la clase
  constructor() {
    /**
     * DI - Dependency Injection
     */
  }

  execute({ base, limit = 10 }: CreateTableOptions) {
    let tableMessage = ''

    for (let i = 1; i <= limit; i++) {
      tableMessage += `${base} x ${i} = ${base * i}\n`
    }

    return tableMessage
  }
}