var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var app = express(); 

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

 app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });


app.get('/hola', function(req, res) {
   res.send('<b>Hello World</b>');
 });

 /* Agrega un paciente a la lista 
    Envar en el body, x-www-form-urlencoded */
 app.post("/pac_insert", function(req , res){
    var singleObj = {};
    var max = 0;
    
    if (lista_pac.length==0)
     { max = 1
     }
     else
     {
      max = lista_pac[0].code;
      console.log(max);
      for (let i = 1; i < lista_pac.length; i++) {
         if (lista_pac[i].code > max) {
            max = lista_pac[i].code;
         }
         
      }
      max++;
     }
     singleObj['code'] = max;
    singleObj['nombre'] = req.body.nombre;
    singleObj['edad'] = req.body.edad;
    lista_pac.push(singleObj);
    
    console.log('Lista', lista_pac)
    res.send('ok');


});

/* Devuelve el paciente con el código enviado */
 app.post("/pac_read", function(req , res){
   console.log(req);
   searching = req.body.code;
   enc=lista_pac.find(function (element) {
      return element.code == searching;
  });
  res.send(enc);
 });

 /* devuelve los pacientes que tienen el nombre buscado */
 app.post("/pac_search", function(req , res){
   searching = req.body.nombre;
   console.log(searching);
   enc=lista_pac.find(function (element) {
   if (element.nombre.localeCompare(searching) == 0)
       {
         console.log("encuentra");
         return element;
       }
       
  });
  res.send(enc);
 });


 app.post("/pac_upd", function(req , res){
   searching = req.body.code;
   enc=lista_pac.find(function (element) {
      
      return element.code == searching;
  });
  
  res.send(enc);
});


app.post("/pac_del", function(req , res){
});

var lista_pac = [];