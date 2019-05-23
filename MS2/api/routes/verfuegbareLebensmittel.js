const express = require('express');
const router = express.Router();
var	fs=require('fs');

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Lebensmittel were fetched'
    });
});



router.post('/', (req, res, next) =>{
    
    //var verfuegbareLebensmittel = req.query.lebensmittel;
    
    //var string = JSON.stringify(obj);
    var string = {verfuegbareLebensmittel : req.query.lebensmittel};
    
    string =  JSON.stringify(string);


    fs.writeFile("lebensmittelliste.json", string, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    res.status(201).json({
        message: 'Lebensmittel was created'
    });

});



module.exports = router;