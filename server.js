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
    let message = '<div style="font-family: Arial; font-size: 26px; font-style: oblique; color: blue; line-height: 1.6; background-color:yellow">' + 'Welcome to the Pokemon App!'
    message += '<br><br><a  href="/pokemon"> Pokemon Index page </a>'      
    res.send(message)
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon})
    
})


app.get('/pokemon/:id', function(req, res){
res.render('Show', { 
 pokemon: pokemon[req.params.id] 

});  
}); 

 // id route
  app.get('/pokemon/:id', (req, res) => {
     res.send(pokemon[req.params.id])
     
  });
 
//  // Index Route - GET /vegetables
//  app.get('/vegetables', function(req, res){
//      res.render('IndexVet', { vegetables: vegetables });
//  }); 






app.listen({port}, () => {
    console.log('listening');
});

