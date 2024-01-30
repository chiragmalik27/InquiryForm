const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')
const path = require('path');

const app = express();
const port = 3000;

// Use body-parser's urlencoded middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Continue to use bodyParser.json() if you're also expecting JSON payloads
app.use(bodyParser.json());

// Serve static files from the Frontend directory
app.use(express.static(path.join(__dirname, '../Frontend')));

app.use('/', userRoutes);

// global catch
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).json({msg:'Something broke!'});
});

app.listen(port, function(){
    console.log(`Server running at https://localhost:${port}`)
});
