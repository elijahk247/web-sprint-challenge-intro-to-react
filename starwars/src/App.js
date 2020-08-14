import React, {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(typeof(res), res)
        console.log(typeof(Array.from(res.data.results)), Array.from(res.data.results))

        const listChars = res.data.results
        setCharacters(listChars)
      })
      .catch(err => {
        console.log('error: ', err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(character => {
          return <Character key={character.url} name={character.name} birth={character.birth_year} />
        })
      }
    </div>
  );
}

export default App;
