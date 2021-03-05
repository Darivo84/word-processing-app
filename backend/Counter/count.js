const fetch = require('node-fetch');

const counts = {}; 
const keys = [];

// Input string from React
const fileUrl = 'https://norvig.com/big.txt'; // Added url here for testing, once frontend is set up remove hardcoded url.

// Fetch data from URL
fetch(fileUrl)
    // Read text
   .then( r => r.text() )
   // Separate words by spaces
   .then( t => t.split(' ') ) 
   .then( t => console.log(t) )


