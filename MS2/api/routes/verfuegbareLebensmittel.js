const express = require('express');
const router = express.Router();
var	fs=require('fs'); //zum scheibene und lesen von json-files

//ueber diese Methode werden die verfuegbaren Lebensmittel hinzufeguegt und in eine JSON-Datei geschrieben

router.post('/', (req, res, next) =>{
    
    var string = {verfuegbareLebensmittel : req.query.lebensmittel}; //in der Variable werden die Lebensmittel gespeichert, welche ueber den Queryparameter angegeben werden
    
    string =  JSON.stringify(string); //Macht alle Zeichen der Variable zu einem String, wodurch man das JSON-Format erhält

    //hier werden die verfuegbaren Lebensmittel in das JSON-File lebensmittelliste geschrieben
    fs.writeFile("lebensmittelliste.json", string, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    //der Status-Code kommt wenn POST erfolgreich war
    res.status(201).json({
        message: 'Lebensmittel was created'
    });

});



module.exports = router;