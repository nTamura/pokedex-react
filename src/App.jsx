import React, {Component} from 'react';
import PokeList from './PokeList'

// import pokeball from '../public/pokeball.png';
// import fetch from 'isomorphic-fetch';
import './index.css';

class App extends Component{
  render(){
    return (
      <div className="pokeapp">
        <img src="../pokeball.png" className="App-logo" alt=""/>
        <h1 className="white"> The Kanto PokeDex! </h1>
        <PokeList/>
      </div>
    )
  }
}
export default App;
