const express = require('express')
const app = express()
const port = 3005
//const pokemon = require('./models/pokemon')
const Pokemon = require('./models/pokemon')
const mongoose = require('mongoose');


// Add Env
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

   app.use((req, res, next) => {
    next();
      });

app.use(express.urlencoded({extended:false}));

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

// app.get('/pokemon', (req, res) => {
//     res.render('Index', {pokemon: pokemon})
    
// })
//Route to Mongo
app.get('/pokemon', (req, res)=>{
  Pokemon.find({}, (error, allPokemons)=>{
      res.render('Index', {pokemon: allPokemons});
      //console.log(allPokemons)
  });
});

//
app.get('/pokemon/new', (req, res) => {
  res.render('New');
});

//create
app.post('/pokemon/', (req, res)=>{
    Pokemon.create(req.body, (error, createdPokemon)=>{
    res.redirect('/pokemon');
});

//res.send('data received');
//res.redirect('/fruits'); //send the user back to /fruits  // before mongoo
Pokemon.create(req.body, (error, createdPokemon)=>{
  res.send(createdPokemon);
  console.log(createdPokemon)
});
})


//
// app.get('/pokemon/:id', (req, res) =>{
//   Pokemon.findById(req.params.id, (err, foundPokemon)=>{
//     res.render('Show', { 
//       pokemon: foundPokemon
// });  //pokemon: pokemon[req.params.id] 
// }); 
// })
app.get('/pokemon/:id', (req, res) =>{
   Pokemon.findById(req.params.id, (err, foundPokemon)=>{
    if (err) {
      console.log(err);
      res.redirect('/pokemon'); 
    } else {
      res.render('Show', { 
        pokemon: foundPokemon
      });
    }
  }); 
})

 // id route
  app.get('/pokemon/:id', (req, res) => {
     res.send(pokemon[req.params.id])
    });
    
  app.get('/pokemon/:id', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.send(foundPokemon);
    });
  });


app.listen({port}, () => {
    console.log('listening');
});

