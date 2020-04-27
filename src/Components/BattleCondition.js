import React from 'react';

const BattleCondition = ({handleChange}) => {
  return (
    <select name="" id="" onChange={handleChange} >
      <option value="">Select the Battle Condition</option>
      <option value="intelligence">Battle of Intelligence</option>
      <option value="speed">Battle of Speed</option>
      <option value="combat">Battle of Combat</option>
      <option value="strength">Battle of Strength</option>
      <option value="power">Battle of Power</option>
    </select>
  )
}

export default BattleCondition;