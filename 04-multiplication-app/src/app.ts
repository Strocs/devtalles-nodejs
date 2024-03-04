import { yarg } from "./config/plugins/args.plugins"
import { ServerApp } from "./presentation/server-app"

(async () => {
  await main()
})()

async function main() {

  const { b: base, l: limit, s: showTable, n: name, d: destination, t: fileType } = yarg
  ServerApp.run({ base, limit, showTable, name, destination, fileType })
}