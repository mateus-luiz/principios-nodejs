const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'application/json'});
    
    if(request.url === "/produto") {
        response.end(JSON.stringify({
            message: "Rota de produto",
        }));
    }
    if(request.url === "/usuario") {
        response.end(JSON.stringify({
            message: "Rota de usutario",
        }));
    }
}).listen(4001, () => console.log("servidor rodando na porta 4001"));