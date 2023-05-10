const React = require('react');

const myStyle = {
    color: '#DFFF00',
    backgroundColor: '#F08080',
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
                                      {pokemon.name}
                                  </a>{' '}
                                  i{pokemon.image} <br></br>
                               
                                  <br />
                              </li>
                          );
                      })}
                  </ul>
                  {/*Put a link in the index page going to the new page*/}
            <nav>
    <a href="/pokemon/new">Create a New Pokemon</a>
</nav>
              </div>
      );
  }
}
module.exports = Index;