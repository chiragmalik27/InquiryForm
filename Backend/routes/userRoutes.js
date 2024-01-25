const express = require('express');
const path = require('path');
const router = express.Router();
const data = require('../utility/data'); // Assuming data.js is in the utility folder

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
    data.writeInquiryToFile(inquiry);
    res.json({DataState : 'Inquiry received'});
});

router.get('/inquiries', (req, res) => {
    const inquiries = data.readInquiryFromFile();
    res.json(inquiries);
});

// Making a route to go to if no valid route is found
router.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../../Frontend/404/index.html'));
});

module.exports = router;
