const express = require('express');
const path = require('path');
const router = express.Router();

let inquiries = [];

router.get('/', function(req, res){
    res.status(200).json("Hello World");
});

router.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, '../../Frontend/login/loginpage.html'));
});

router.get('/singup', function(req, res){
    res.sendFile(path.join(__dirname, '../../Frontend/singup/index.html'));
});

router.post('/inquiry', function(req, res){
    const inquiry = req.body;
    inquiries.push(inquiry);
    res.send('Inquiry received');
});

router.get('/inquiries', (req, res) => {
    res.json(inquiries);
});

module.exports = router;
