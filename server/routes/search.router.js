const express = require('express');
// GET route for GIPHY's from server
const axios = require('axios');
const router = express.Router();


//Method for retrieving hidden api key
require('dotenv').config();
const GIPHY_KEY = process.env.GIPHY_API_KEY
//Ensure GIPHY_KEY is defined
console.log('GIPHY key', GIPHY_KEY);



/** ---------- EXPRESS ---------- **/
router.post('/', (req, res) => {
    const queryString = req.body.searchString;
    console.log(queryString);
    
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${queryString}`)
    .then(response => {
       console.log(('Data from GIPHY:', response.data));
       res.send(response.data.data);
    }).catch(error => {
        console.log('Error getting trending form giphy', error);
        res.sendStatus(500);
    });
       
    });

    module.exports = router;

