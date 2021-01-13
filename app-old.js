const http = require('http');


http.createServer((req, resp) => {

        resp.write('hello word');
        resp.end();



    })
    .listen(8080);

console.log('listen in port 8080');