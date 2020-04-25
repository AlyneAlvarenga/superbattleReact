import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dropdown = () => {

  const superheroIds = [18, 30, 35, 38];

  const [superheroData, setSuperheroData] = useState([]);

  // const getAllSuperheroes = (idArr) => {
  //   return Promise.all(idArr.map(id => {
  //     return axios({
  //       method: 'GET',
  //       url: 'https://proxy.hackeryou.com',
  //       responseType: 'json',
  //       params: {
  //         reqUrl: `https://superheroapi.com/api/2827401063977440/${id}`,
  //         proxyHeaders: {
  //           'header_params': 'value'
  //         },
  //         xmlToJSON: false,
  //       }
  //     }).then(response => {
  //       console.log(response.data);
  //     })
  //   }))
  // }

  

  useEffect(() => {
    const getAllSuperheroes = (idArr) => {
      return idArr.map(id => {
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
      })
    }

    const promises = getAllSuperheroes(superheroIds);
    const objects = Promise.allSettled(promises).then(res => res.data);
    console.log(objects);
    
    // setSuperheroData(objects);

  }, [superheroIds]); 

  return (
    <form action="">
      <select name="" id="">
        {
          superheroIds.map(id => {
            return <option value={id}>{id}</option>
          })
        }
      </select>
    </form>
  )
}

export default Dropdown;