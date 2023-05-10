const express = require('express')
const app = express()
const port = 3005
const pokemon = require('./models/pokemon')

//view engine
app.set('view engine', 'jsx');
  app.engine('jsx', require('jsx-view-engine').createEngine());

//use res.render link to index.jsx file instead of res.send
// app.get('/', (req, res) => {
//     res.send('Welcome to the Pokemon App!');
// });

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon})
})



app.listen({port}, () => {
    console.log('listening');
});

