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

// id route
// app.get('/pokemon/:i', function(req, res){
//     res.render('Show', { //second param must be an object   
//      fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//    });
//  }); 
 
  app.get('/pokemon/:id', (req, res) => {
     res.send(pokemon[req.params.id]);
 });
 
//  // Index Route - GET /vegetables
//  app.get('/vegetables', function(req, res){
//      res.render('IndexVet', { vegetables: vegetables });
//  }); 






app.listen({port}, () => {
    console.log('listening');
});

