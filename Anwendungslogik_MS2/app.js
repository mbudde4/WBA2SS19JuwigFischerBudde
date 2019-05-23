/*var path =require('path');
var routes =require('./routes/index');
var about = require('./routes/about');
*/

const http = require ('http');
var express= require('express');
const server = http.createServer ((req, res)=> {    

    if (req.url === '/'){
    //..
    }

    if (req.url === '/api/courses'){
        //..
    }

});

//var anz_lebensmittel= new array (5);



var anz_lebensmittel = ["Eier", "Milch", "Butter"];
var anz_2 = ["Eier", "Milch", "Butter"];

'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('rezepte.json');
let rezepte = JSON.parse(rawdata);


//console.log(rezepte.rezepte[0].inhalt);
//console.log(rezepte.rezepte[0].gericht);



for(var i=0; i<rezepte.rezepte.length;i++) {

    //console.log(anz_lebensmittel.toString() == rezepte.rezepte[i].inhalt.toString())
  if((anz_lebensmittel.toString() == rezepte.rezepte[i].inhalt.toString())==true){

     console.log(rezepte.rezepte[i].gericht+"\n"+"Inahlt:  "+rezepte.rezepte[i].inhalt+"\n"+"Nährwerte:  "+rezepte.rezepte[i].nährwerte);

  }

}


//console.log(window.JSON)

server.listen (3000);