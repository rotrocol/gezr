var server = require("./src/server")

sv = new server.Server("localhost", 3000)
sv.start()