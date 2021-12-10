const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
require('dotenv').config();
const cors = require('cors');

const app = express();

const posts = require('./server/routes/posts');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/angular-node')));
app.use('/posts', posts);

// catch all other routes request and return it to the index
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/angular-node/index.html'));
});

const PORT = process.env.PORT || 4600;
app.listen(PORT, (req, res) => {
    console.log(`Server running on port: ${PORT}`);
});