const express = require('express');
const router = express.Router();

//var ausgabelänge
//var puffer

//get anfrage der Gerichte mit ausgabelaenge und Puffer als Query Parameter

//Liste aller Gerichte
router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Handling GET requests to /gerichte'
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