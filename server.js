// const express = require('express');
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

const PORT = process.env.PORT || 3000;

// Connect to MongoDB Database
mongoose.set('useCreateIndex', true);
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/movies';
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Initialize HTTP Server
const app = express();

app.use(morgan('combined'));
app.use('/v1', router);

// Handle / Route
/*app.get('/', (req, res) => {
  res.send('Hello World!')
});*/

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
});