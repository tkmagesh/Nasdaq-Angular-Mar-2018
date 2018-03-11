var ws = require("nodejs-websocket")
var server = ws.createServer(function (conn) {
    conn.on("text", function (str) {
        server.connections.forEach(function(con){
        	con.sendText(str);
        });
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    });
    conn.on('error', function(){
        console.log('something went wrong!');
    });
}).listen(9090);