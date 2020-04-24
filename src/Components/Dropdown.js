import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dropdown = () => {

  const superheroIds = [18, 30, 35, 38, 61, 69, 95, 106, 107, 127];

  const [superheroData, setSuperheroData] = useState([]);
  
  // , 149, 157, 162, 176, 208, 213, 226, 275, 278, 289, 303, 313, 332, 346, 370, 374, 405, 410, 414, 418, 423, 487

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
      }).then(response => {
        console.log(response.data);
        
      })
    }))
  }

  useEffect(() => {

    getAllSuperheroes(superheroIds);
    // const getData = async () => {
    //   const response = await axios({
    //     method: 'GET',
    //     url: 'https://proxy.hackeryou.com',
    //     responseType: 'json',
    //     params: {
    //       reqUrl: `https://superheroapi.com/api/2827401063977440/24`,
    //       proxyHeaders: {
    //         'header_params': 'value'
    //       },
    //       xmlToJSON: false,
    //     }
    //   });
    //   console.log(response.data);
    // }
    // getData();
  }, [superheroIds])

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