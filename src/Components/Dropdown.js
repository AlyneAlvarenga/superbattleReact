import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from './Select';


const Dropdown = () => {

  const [superheroData, setSuperheroData] = useState([]);
  const [superhero1, setSuperhero1] = useState('');
  const [superhero2, setSuperhero2] = useState('');
  const [disableSuperhero1, setDisableSuperhero1] = useState(false);
  const [disableSuperhero2, setDisableSuperhero2] = useState(false);

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

  const handleChange = (event) => {
    console.log(event.target.value);

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

  return (
    <form action="">
      <Select superheroData={superheroData} handleChange={handleChange} disabled={disableSuperhero1} />
      <Select superheroData={superheroData} handleChange={handleChange} disabled={disableSuperhero2} />
    </form>
  )
}

export default Dropdown;