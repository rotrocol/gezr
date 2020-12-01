var express = require("express")

class Room{

    getStats(req, res){
        console.log("Get Stats")
        res.send("Facts!")
    }
    
    getUsers(req, res){
        console.log("Get Users")
        res.send(['user1'])
    }
    
    connect(req, res){
        console.log("Connect to chatroom")
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
            this.port = 3001

        this.app = express()
        
        this.app.get('/users', this.getUsers)
        this.app.get('/stats', this.getStats)
        this.app.post('/connect', this.connect)
    }

    start(){
        this.server = this.app.listen(this.port, this.addr, function(){
            console.log("Room started")
        })
    }
    
}

exports.Room = Room