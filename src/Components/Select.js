import React, { useEffect, useState } from 'react';

const Select = (props) => {
  return (
    <select name="" id="" onChange={props.handleChange}>
      {
        props.superheroData.map(obj => {
          return <option key={obj.id} value={obj.id}>{obj.name}</option>
        })
      }
    </select>
  )
}

export default Select;