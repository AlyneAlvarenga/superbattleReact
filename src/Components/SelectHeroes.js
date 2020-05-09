import React from 'react';
import { NativeSelect } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

const SelectHeroes = (props) => {
  const styles = {
    width: "200px",
    fontSize: "1.5rem"
  }
  return (
    <FormControl variant="outlined">
      <NativeSelect inputProps={{style: styles}} style={styles} name="" onChange={props.handleChange} disabled={ props.disabled ? true : null }>
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