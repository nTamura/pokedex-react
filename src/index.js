import {render} from 'react-dom';
import React, {Component} from 'react';
import './index.css';

class PokeApp extends Component{
  render(){
    return <div className="pokeapp">
      <h1> The Kanto PokeDex! </h1>
    </div>;
  }
}
render(<PokeApp/>,document.getElementById('app'))
