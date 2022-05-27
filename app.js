const express = require('express');
const path = require('path');
const app = express();

const port =process.env.PORT || 3040;

app.use(express.static('public'));
//app.use ( express.static( path.join(__dirname, './public')));
app.listen(port, () => console.log('hacemos esto levantando el servidor')) ;
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/prueba', (req,res)=>{
    res.sendFile(__dirname + '/views/prueba.html');
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
//app.get('/', (req, res) => { res.sendFile(path.join(__dirname, '/views/home.html'));});