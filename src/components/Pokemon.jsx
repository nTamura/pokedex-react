import React from 'react';

const Pokemon = (props) => {
  const { pokemon, id } = props;
  
  return (
    <div className="pokemon--species">
      <div className="pokemon--species--container">
        <div className="pokemon--species--sprite">
          <img src={`./sprites/${id}.png`} alt="" />
        </div>
        <div className="pokemon--species--name"> 
        <span>{id} - {pokemon.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Pokemon