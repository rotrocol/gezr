var express = require("express")

class Server{

    getWebpage(req, res){
        console.log("Get Webpage")
        res.send("Hello World!")
    }
    
    getChatRooms(req, res){
        console.log("Get Chatrooms")
        res.send(['room1'])
    }
    
    registerChatRooms(req, res){
        console.log("Register chatroom")
        console.log(req.body)
        res.send()
    }

    constructor(addr, port){
        if(addr)
            this.addr = addr
        else
            this.addr = "localhost"

        if(port)
            this.port = port
        else
            this.port = 3000

        this.app = express()
        
        this.app.get('/', this.getWebpage)
        this.app.get('/chatrooms', this.getChatRooms)
        this.app.post('/roomregister', this.registerChatRooms)
    }

    start(){
        this.server = this.app.listen(this.port, this.addr, function(){
            console.log("Server started")
        })
    }
    
}

exports.Server = Server