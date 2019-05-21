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


module.exports = app;