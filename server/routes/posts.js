const express = require('express');
const router = express.Router();
const axios = require('axios');
const PostsAPI = 'https://jsonplaceholder.typicode.com';

// GET POST
router.get('/', (req, res) => {
    axios.get(`${PostsAPI}/posts`).then(posts => {
        res.status(200).json(posts.data);
    }).catch(error => {
        console.log('Error: ', error);
    });
});

module.exports = router;