import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Dropdown from './Components/Dropdown';
import Winner from './Components/Winner';

function App() {
  const [displayResults, setDisplayResults] = useState(false);

  const [superheroData, setSuperheroData] = useState([]);
  const [superhero1, setSuperhero1] = useState('');
  const [superhero2, setSuperhero2] = useState('');
  const [disableSuperhero1, setDisableSuperhero1] = useState(false);
  const [disableSuperhero2, setDisableSuperhero2] = useState(false);
  const [chosenBattle, setChosenBattle] = useState('');

  useEffect(() => {
    const superheroIds = [18, 30, 35, 38];

    const getAllSuperheroes = (idArr) => {
      return Promise.all(idArr.map(id => {
        return axios({
          method: 'GET',
          url: 'https://proxy.hackeryou.com',
          responseType: 'json',
          params: {
            reqUrl: `https://superheroapi.com/api/2827401063977440/${id}`,
            proxyHeaders: {
              'header_params': 'value'
            },
            xmlToJSON: false,
          }
        })
      })).then(response => {
        const objectArray = [];
        response.forEach(res => {
          objectArray.push(res.data);
        })
        setSuperheroData(objectArray);

      })
    }
    getAllSuperheroes(superheroIds);

  }, []);

  const handleSuperheroChange = (event) => {
    const chosenHero = [];

    superheroData.find(obj => {
      return obj.id === event.target.value ? chosenHero.push(obj) : null
    })

    if (superhero1 === '') {
      setSuperhero1(chosenHero);
      setDisableSuperhero1(true);
    } else {
      setSuperhero2(chosenHero);
      setDisableSuperhero2(true);
    }
  }

  const handleBattleChange = (event) => {
    setChosenBattle(event.target.value);
    setDisplayResults(true);
  }

  return (
    <main className="App">
      <Header />
      {
        !displayResults ?
          <Dropdown 
            superheroData={superheroData}
            handleSuperheroChange={handleSuperheroChange}
            disableSuperhero1={disableSuperhero1}
            disableSuperhero2={disableSuperhero2}
            handleBattleChange={handleBattleChange}
            chosenBattle={chosenBattle}
          />
          : 
          <Winner 
            superhero1={superhero1}
            superhero2={superhero2}
            chosenBattle={chosenBattle}
          />
      }
    </main>
  );
}

export default App;
