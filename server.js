const express = require('express')
const app = express()
const port = 3005


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});





app.listen({port}, () => {
    console.log('listening');
});

