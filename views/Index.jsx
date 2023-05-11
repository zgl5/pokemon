const React = require('react');

const myStyle = {
    color: '#DFFF00',
    backgroundColor: '#F08080',
    fontSize: '25px',
    lineHeight: '1.6'
    };

class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div style={myStyle}>
                  <h1> See All The Pokemon!'</h1>
                  <ul>
                      {pokemon.map((pokemon, i) => {
                          return (
                              <li>
                                  The{' '}
                                  <a href={`/pokemon/${i}`}>
                                      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                    
                                  </a>{' '}
                                 
                               
                                  <br />
                              </li>
                          );
                      })}
                  </ul>
                  {/*Put a link in the index page going to the new page*/}
                  {/* <nav> <a href="/pokemon/new">Create a New Pokemon</a> </nav>*/}
              </div>
      );
  }
}
module.exports = Index;