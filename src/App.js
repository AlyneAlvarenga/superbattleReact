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
  const [disableSuperhero2, setDisableSuperhero2] = useState(true);
  const [disableBattle, setDisableBattle] = useState(true);
  const [chosenBattle, setChosenBattle] = useState('');

  const [percentages, setPercentages] = useState([]);

  // 30, 35, 38, 61, 69, 95, 106, 107, 127, 149, 157, 162, 176, 208, 213, 226, 275, 278, 289, 303, 313, 332, 346, 370, 374, 405, 410, 414, 418, 423, 487
  useEffect(() => {
    const superheroIds = [18, 30, 35, 38, 61, 69, 95, 106, 107, 127, 149, 157, 162, 176, 208, 213, 226, 275, 278, 289, 303, 313, 332, 346, 370, 374, 405, 410, 414, 418, 423, 487];

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
      setDisableSuperhero2(false);
    } else {
      setSuperhero2(chosenHero);
      setDisableSuperhero2(true);
      setDisableBattle(false);
    }
  }

  const handleBattleChange = (event) => {
    setChosenBattle(event.target.value);
    setDisplayResults(true);
  }

  useEffect(() => {
    const getPercentages = () => {
      const hero1 = parseInt(superhero1[0].powerstats[chosenBattle]);
    
      const hero2 = parseInt(superhero2[0].powerstats[chosenBattle]);

      const percentageHero1 = hero1 * 283 / 100;
      const percentageHero2 = hero2 * 283 / 100;
  
      setPercentages([percentageHero1, percentageHero2]);
    }

    if (chosenBattle) {
      getPercentages();
    }

  }, [chosenBattle, superhero1, superhero2])


  const resetGame = () => {
    setDisplayResults(false);
    setSuperhero1('');
    setSuperhero2('');
    setDisableSuperhero1(false);
    setDisableSuperhero2(true);
    setDisableBattle(true);
    setChosenBattle('');
    setPercentages([]);
  }

  return (
    <div className="App-container">
      <Header 
        displayResults={displayResults}
      />
      {
        !displayResults ?
          <Dropdown 
            superheroData={superheroData}
            handleSuperheroChange={handleSuperheroChange}
            disableSuperhero1={disableSuperhero1}
            disableSuperhero2={disableSuperhero2}
            handleBattleChange={handleBattleChange}
            chosenBattle={chosenBattle}
            disableBattle={disableBattle}
          />
          : 
          <Winner 
            superhero1={superhero1}
            superhero2={superhero2}
            chosenBattle={chosenBattle}
            percentages={percentages}
            resetGame={resetGame}
          />
      }
    </div>
  );
}

export default App;
