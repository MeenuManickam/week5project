let express = require ('express');
let app = express();
let bodyParser = require('body-parser');

let database = [];

//setting up view engine 
app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");

//allow Express to understand the urlencoded format
app.use(bodyParser.urlencoded({
    extended: false
    })
)
//showing of logo 
app.use(express.static('images'));
app.use(express.static('styles'));

app.get('/', function(req,res){
    res.render("index.html")
});

app.get('/newtask', function(req,res){
    console.log('app.get has gone through');
    res.sendFile(__dirname+"/views/" + 'newtask.html');
})

app.get('/listtasks', function(req,res){
    console.log('app.get has gone through');
    res.render(__dirname+"/views/" + 'tasklist.html', {tasks:database});
});


app.listen(8080);

console.log('Server running at http://localhost:8080/');
