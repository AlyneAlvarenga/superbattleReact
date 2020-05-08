import React from 'react';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

const SelectHeroes = (props) => {
  const styles = {
    width: "150px",
    fontSize: "1.8rem"
  }
  return (
    <FormControl variant="outlined" inputProps={{ style: styles }}>
      <InputLabel id="superhero">Choose Your Champion</InputLabel>
      <Select inputProps={{style: styles}} labelId="superhero" style={styles} label="Test"  name="" onChange={props.handleChange} disabled={ props.disabled ? 'disabled' : null }>
          <MenuItem value="">Choose Your Champion</MenuItem>
        {
          props.superheroData.map(obj => {
            return <MenuItem key={obj.id} value={obj.id}>{obj.name}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  )
}

export default SelectHeroes;