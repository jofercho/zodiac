const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://mongo_complete:Nvlx321!@cluster0.thqd8.mongodb.net/gaby?retryWrites=true&w=majority';

const paintingRoutes = require('./routes/paintingRoute');

const app = express();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})
app.use('/painting', paintingRoutes);
const painting =

mongoose
    .connect(MONGODB_URI)
    .then(result => {
        app.listen(8090);
    })
    .catch(err => console.log(err));