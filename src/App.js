import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [pokedex, setPokedex] = useState([])
  useEffect(()=> {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=809')
    .then((response)=> {
      console.log(response);
      setPokedex(response.data.results)
    })
    .catch((err)=> {
      console.log(err);
    })
  },[])
  
  return (
    <div className="App">
      <h1>Pokemon</h1>
      {
        pokedex.map((entry, index) => (
          <div key={index}>
            {entry.name}
          </div>
        ))
      }

      
    </div>
  );
}

export default App;
