const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const server = express();
const cors = require('cors');

mongoose.connect('mongodb+srv://admin:admin@cluster0.nofp8.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
server.use(cors());
server.use(express.json())
server.use(routes)

server.listen(3333);