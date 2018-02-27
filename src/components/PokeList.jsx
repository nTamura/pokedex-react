import React, { Component } from 'react';
import Pokemon from './Pokemon'

class PokeList extends Component {
  render(){
    const { fetched, loading, species } = this.props;
    let content;

    if (fetched) {
      content = (
        <div className="pokemon--species--list">
        {species.map((pokemon,index)=>
          <Pokemon 
            key={pokemon.index} 
            id={index+1} 
            pokemon={pokemon}/>
        )}
        </div>
      )
    } else if (loading && !fetched) {
      content = <p className="white">Loading...</p>;
    } else {
      content = <div/>;
    }
    return  <div>{content}</div>;
  }
}

export default PokeList;