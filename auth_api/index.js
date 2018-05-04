const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose.Promise = Promise;
mongoose.createConnection('mongodb://localhost:api/auth');

// App Setup
//app.use(morgan('combined')); // Disable for production
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

exports.app = app;
