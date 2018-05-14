const express = require('express');
const bodyParser = require("body-parser");          /// ถ้าจะรับค่าจาก body :: POST จำเป็นต้องใช้ตัวนี้ 
const app = express();
const server = require('http').Server(app);
server.listen(8000);

const birds = require('./birds');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('web'));     /// folder อะไรก็ได้ อ้างอิงให้ถูกก็พอ 
console.log("server running port 8000");

app.use('/birds', birds);

app.get('/te*', function (req, res, next) {
    console.log("ดีจ้า ");
    next();
});

app.get('/hello', function (req, res) {
    console.log(req.query)
    res.end(" Hello : alone  " + req.query.userName);
})

app.get('/hello/:userName/:age/', function (req, res) {
    console.log(req.params)
    res.end(" Hello :  " + req.params.userName);
});

app.post('/hello', function (req, res) {
    console.log(req.body);

    let obj = {
        code: "123456",
        name: req.body.data.name + " " + req.body.data.lastname
    }
    res.json(obj);      //// .json คือ return เป็น application/json;  
});


var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function (req, res) {
    res.send('Hello from C!');      /// .send() คือสามารถส่งได้มากกว่า 1 ไม่เหมือน .end()
}

app.get('/example/c', [cb0, cb1, cb2]);


app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book');
    })
    .post(function (req, res) {
        res.send('Add a book');
    })
    .put(function (req, res) {
        res.send('Update the book');
    });
