var config = require('./config.js');
var http = require('http');
var express = require('express');
// var fct = require('./function.js');
var moment = require('moment')

// pour MongoDB
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
var url = config.mongo.url;
var options = config.mongo.options;
var dbMongo; // pour mongo

var app = express();

var server = http.createServer(app);

var io = require('socket.io')(server);

function noCache(res) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
}

app.use(express.static(config.serveur.staticFiles));
app.get('/', function(req, res) {
    noCache(res);
    res.sendFile(__dirname + '/' + config.serveur.staticFiles + '/index.html');
});

//Remplire tableau
// app.post('/getMembres', function(req, res){
//     dbConnect().then(db => {
//         var col = db.collection('Membres');
//         col.find({
//
//         }).sort().toArray(function(err, rows){
//             if(err) throw err;
//             if(rows[0] != null){
//                 res.send({success: true, list:rows});
//             }
//         });
//     }).catch(err => {
//         console.log(err);
//     });
// });

//MongoDB
//Connection à la base de donnée
function dbConnect(){
    return new Promise(function(resolve, reject){
        MongoClient.connect(url, function (err, db) {
            if(err) reject(err);
            resolve(db);
        });
    });
}



//Socket.io
io.on('connection', function(socket) {

});

server.listen(config.serveur.port, config.serveur.host);
