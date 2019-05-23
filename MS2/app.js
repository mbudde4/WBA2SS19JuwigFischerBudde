const express = require('express');
const app = express();
const morgan = require('morgan');

const gerichteRoutes = require ('./api/routes/gerichte');
const lebensmittelRoutes = require ('./api/routes/lebensmittel');
const verfuegbareLebensmittelRoutes = require ('./api/routes/verfuegbareLebensmittel');



//ist dafür da um Feedback in der Konsole zu bekommen was der Server gerade macht und wie lange es geauert hat. Z.B. GET Anfrage
app.use(morgan('dev'));

//Routes which should handle requests
//Hier wird gesagt, dass die 
app.use('/gerichte', gerichteRoutes);
app.use('/lebensmittel', lebensmittelRoutes);
app.use('/verfuegbareLebensmittel', verfuegbareLebensmittelRoutes);



app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

/*
//Anwendung:EIngabe Array (an Lebensmittel) mit Lebensmittel in rezepte.Json vergleichen

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

*/
module.exports = app;






