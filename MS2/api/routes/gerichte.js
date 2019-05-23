const express = require('express');
const router = express.Router();

'use strict';

const fs = require('fs');

//var ausgabelänge
//var puffer

//get anfrage der Gerichte mit ausgabelaenge und Puffer als Query Parameter

//Liste aller Gerichte
router.get('/', (req, res, next) =>{

    //Anwendung:EIngabe Array (an Lebensmittel) mit Lebensmittel in rezepte.Json vergleichen
    let data = fs.readFileSync('lebensmittelliste.json');
    //var anz_lebensmittel = ["Eier", "Milch", "Butter","Spinat","Kartoffeln"]; 
    let anz_lebensmittel = JSON.parse(data);
  //  var anz_2 = ["Eier", "Milch", "Butter"];

    

    let rawdata = fs.readFileSync('rezepte.json');
    let rezepte = JSON.parse(rawdata);


    //console.log(rezepte.rezepte[0].inhalt);
    //console.log(rezepte.rezepte[0].gericht);

    
    //console.log(anz_lebensmittel.toString().includes(anz_2.toString(),0));


    var ausgabe=[100];    
    var x=0;
    var leer=true;
    
    for(var i=0; i<rezepte.rezepte.length;i++) {

        if((anz_lebensmittel.verfuegbareLebensmittel.toString().includes(rezepte.rezepte[i].inhalt.toString()))==true){

            leer=false;

            console.log(rezepte.rezepte[i].gericht+"\n"+"Inahlt:  "+rezepte.rezepte[i].inhalt+"\n"+"Nährwerte:  "+rezepte.rezepte[i].nährwerte);
            console.log("\n\n")

            ausgabe[x]=rezepte.rezepte[i].gericht;
            ausgabe[x]=rezepte.rezepte[i].inhalt;
            ausgabe[x]=rezepte.rezepte[i];
            x++
        }
        
        if (leer==true){
            ausgabe[0]="Keine passenden Gerichte";
        }
    }

    res.status(200).json({
        gericht: ausgabe
    });

});

//Einzelnes Gericht
router.get('/:gerichteId', (req, res, next) =>{
    const id = req.params.gerichteId;
    if(id === 'special'){
    res.status(200).json({
        message: 'You discovered the special ID',
        id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

module.exports = router;