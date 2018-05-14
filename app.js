var http = require('http'); // http เป็น build in ของ node มีมาให้เลย และ require เป็น function ของ node นะ ไม่ใช่ของ js ใช้สำหรับเรียก module 
http.createServer(function(req,res){ 
    // การทำงานของ http มันก็จะต้องมี request and response
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('yes you can\n');
}).listen(8000);
console.log("server running port 8000"); 
