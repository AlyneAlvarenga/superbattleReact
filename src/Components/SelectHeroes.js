import React from 'react';
import { NativeSelect } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

const SelectHeroes = (props) => {
  const styles = {
    width: "250px",
    fontSize: "1.6rem",
    color: "white",
    fontWeight: "bold"
  }
  return (
    <FormControl variant="outlined">
      <NativeSelect style={styles} name="" onChange={props.handleChange} disabled={ props.disabled ? true : null }>
          <option value="">Choose Your Champion</option>
        {
          props.superheroData.map(obj => {
            return <option key={obj.id} value={obj.id}>{obj.name}</option>
          })
        }
      </NativeSelect>
    </FormControl>
  )
}

export default SelectHeroes;