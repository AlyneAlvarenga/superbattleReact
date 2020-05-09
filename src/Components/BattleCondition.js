import React from 'react';
import { NativeSelect } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

const BattleCondition = ({handleChange}) => {
  const styles = {
    width: "200px",
    fontSize: "1.5rem",
    color: "black"
  }

  return (
    <FormControl variant="outlined">
      <NativeSelect style={styles} name="" id="" onChange={handleChange} >
        <option value="">Battle Condition</option>
        <option value="intelligence">Battle of Intelligence</option>
        <option value="speed">Battle of Speed</option>
        <option value="combat">Battle of Combat</option>
        <option value="strength">Battle of Strength</option>
        <option value="power">Battle of Power</option>
      </NativeSelect>
    </FormControl>
  )
}

export default BattleCondition;