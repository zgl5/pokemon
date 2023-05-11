//require at the top
const React = require('react')
const myStyle = {
    color: '#090A0A',
    backgroundColor: '#40E0D0',
    };


class Show extends React.Component {
  render () {
   const pokemon = this.props.pokemon
    return (
     
      <div style={myStyle}>
                  <h1 style={{color: 'red', textAlign:'center'}}>Gotta Catch 'Em All</h1><br></br>
                  <h2 style={{color: 'blue', textAlign:'center'}}>  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} </h2>    
                  <img style ={{ display: 'block', marginLeft:'auto', marginRight:'auto', width: '40%'}} src={pokemon.img + '.jpg'}  alt={pokemon.name} />  <br></br>
                  <a style={{fontFamily: 'Arial', fontSize: '30px', fontStyle: 'oblique', color: 'blue'}}  href="/pokemon">  Back </a>      
                 
                 </div>
      );
     }
   }
   
  module.exports  = Show;
