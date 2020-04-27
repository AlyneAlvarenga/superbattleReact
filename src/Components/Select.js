import React from 'react';

const Select = (props) => {
  return (
    <select name="" id="" onChange={props.handleChange} disabled={ props.disabled ? 'disabled' : null }>
      <option value="">Choose Your Champion</option>
      {
        props.superheroData.map(obj => {
          return <option key={obj.id} value={obj.id}>{obj.name}</option>
        })
      }
    </select>
  )
}

export default Select;