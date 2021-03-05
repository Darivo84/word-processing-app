const express = require('express');
const cors = require('cors')({ origin: true });

const count = require('./Counter/count')

const app = express();
const PORT = 5000; 

app.get('/', (req, res) => {
    res.send(count);
});


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
