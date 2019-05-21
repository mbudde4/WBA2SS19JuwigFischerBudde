const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Lebensmittel were fetched'
    });
});

router.get('/:lebensmittelId', (req, res, next) =>{
    res.status(200).json({
        message: 'Lebensmittel details',
        lebensmittelId: req.params.lebensmittelId
    });
});

module.exports = router;