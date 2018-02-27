import React, { Component } from 'react';
import PokeList from './components/PokeList'
import Footer from './components/Footer'
import './index.css';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'

class App extends Component {
  constructor(){
    super();
    this.state = {
      species : [],
      fetched : false,
      loading : false,
    };
  }

  componentWillMount(){
    this.setState({
      loading : true
    });
    fetch(url)
      .then(res=>res.json())
      .then(response=>{
        this.setState({
          species : response.results,
          loading : true,
          fetched : true
        });
      });
  }

  render(){
    return (
      <div>
        <div className="pokeapp">
          <img 
            src="../pokeball.png" 
            className="App-logo" alt=""/>
          <h1 className="white">
            The Kanto PokeDex! 
          </h1>
          <hr/>
          <PokeList {...this.state} />
        <Footer />
        </div>
      </div>
    )
  }
}

export default App;
