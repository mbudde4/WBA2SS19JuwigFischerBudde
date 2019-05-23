const express = require('express');
const router = express.Router();

'use strict';

const fs = require('fs');

//var ausgabelänge

//Gibt alle Gerichte zurück, die zu den eingebenen Lebensmitteln passen
router.get('/', (req, res, next) =>{

    //ließt die verfuegbarenLebensmittel aus der lebensmittel.json aus
    let data = fs.readFileSync('lebensmittelliste.json');
    let anz_lebensmittel = JSON.parse(data);

    
    //ließt die Gerichte aus der lebensmittel.json aus
    let rawdata = fs.readFileSync('rezepte.json');
    let rezepte = JSON.parse(rawdata);

    
    var ausgabe=[100]; //hier wird alles gespeichert, was nachher durch get ausgegeben wird
    var x=0; //zaehlervariable
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