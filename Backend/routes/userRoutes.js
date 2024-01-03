const express = require('express');
const path = require('path');
const router = express.Router();

let inqueries = [];

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../../Frontend/index.html'));
});

router.post('/inquiry', function(req, res){
    const inquiry = req.body;
    inqueries.push(inquiry);  // Use 'inqueries' instead of 'inquiries'
    res.status(200).send('Inquiry received');
});

router.get('/inquiries', (req, res) => {
    res.status(200).json(inqueries);
});

module.exports = router;
