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
    var leer=true; //gibt an ob die ausgabe der Gerichte Leer ist
    
    for(var i=0; i<rezepte.rezepte.length;i++) { //es wird durch die gesamte Rezepte.json datei iteriert 

        if((anz_lebensmittel.verfuegbareLebensmittel.toString().includes(rezepte.rezepte[i].inhalt.toString()))==true){  //vergleich welche eingegebenen Lebensmittel in welchen der Gerichte vorkommt

            leer=false;  //sobald es ein Gericht gibt wo die eingegebenen Lebensmittel drin enthalten sind ist die Ausgabe der Gerichte nicht mehr leer

            //console.log(rezepte.rezepte[i].gericht+"\n"+"Inahlt:  "+rezepte.rezepte[i].inhalt+"\n"+"Nährwerte:  "+rezepte.rezepte[i].nährwerte); 
           // console.log("\n\n")

            ausgabe[x]=rezepte.rezepte[i].gericht; //Gerichte die zu den eingegebenen Lebensmittel passen werde in die ausgabe gespeichert 
            ausgabe[x]=rezepte.rezepte[i].inhalt;  //Lebensmittel der Gerichte die zu den eingegebenen Lebensmittel passen werde in die ausgabe gespeichert 
            ausgabe[x]=rezepte.rezepte[i];  //Nährwerte der Gerichte die zu den eingegebenen Lebensmittel passen werde in die ausgabe gespeichert 
            x++ 
        }
        
        if (leer==true){       //falls keine passenden Gerichte zu den eingegebenen Lebensmittel gefunden werden
            ausgabe[0]="Keine passenden Gerichte";
        }
    }

    res.status(200).json({  //ausgabe mit dem http status Code 200 (ok)
        gericht: ausgabe
    });

});


module.exports = router;