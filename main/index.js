const express = require('express');
const path = require('path');
const app = express();

app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

console.log('Main server files ran');

exports.app = app;
