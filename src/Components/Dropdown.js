import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from './Select';


const Dropdown = () => {

  const [superheroData, setSuperheroData] = useState([]);

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
    
  }

  return (
    <form action="">
      <Select superheroData={superheroData} handleChange={handleChange} />
      <Select superheroData={superheroData} handleChange={handleChange} />
      {/* <select name="" id="">
        {
          superheroData.map(obj => {
            return <option key={obj.id} value={obj.id}>{obj.name}</option>
          })
        }
      </select> */}
    </form>
  )
}

export default Dropdown;