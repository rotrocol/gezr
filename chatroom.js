var server = require("./src/chatroom")

sv = new server.Room("localhost", 3001)
sv.start()