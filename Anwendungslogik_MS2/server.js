/*const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
*/
const express = require('express');
const app = express();
const courses = [
    { id: 1,  name: 'courses' },
    { id: 1,  name: 'courses' },
    { id: 1,  name: 'courses' },
];


app.get('/', (req, res)=> {
    res.send('hello World');
});

app.get('/api/courses', (req, res)=> {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res)=> {
    res.send(req.query);
});

app.get('/api/compare', (req, res)=> {
    var anz_lebensmittel = ["Eier", "Milch", "Butter"];
    function strcmp(a, b)
{   
    return (a<b?-1:(a>b?1:0));  
}

if (strcmp("hallo","bello")==false){
    print("hallo waas geeht");
}
});


//port
const port = process.env.port || 3000;
app.listen (port, () => console.log (`listen on Port ${port}...`));