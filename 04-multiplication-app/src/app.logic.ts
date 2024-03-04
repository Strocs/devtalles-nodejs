import { mkdirSync, writeFileSync } from "fs"
import { yarg } from "./config/plugins/args.plugins"

const { b: base, l: limit, s: displayTable } = yarg

let tableMessage = `
===============================
        Tabla del ${base}
===============================\n
`

for (let i = 1; i <= limit; i++) {
  tableMessage += `${base} x ${i} = ${base * i}\n`
}

const outputPath = `outputs`

mkdirSync(outputPath, { recursive: true })
writeFileSync(`${outputPath}/tabla-${base}.txt`, tableMessage)

if (displayTable) console.log(tableMessage)
