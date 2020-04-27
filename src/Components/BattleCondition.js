import React from 'react';

const BattleCondition = ({handleChange}) => {
  return (
    <select name="" id="" onChange={handleChange} >
      <option value="">Select the Battle Condition</option>
      <option value="intelligence">Battle of Intelligence</option>
      <option value="speed">Battle of speed</option>
      <option value="combat">Battle of combat</option>
      <option value="strength">Battle of strength</option>
    </select>
  )
}

export default BattleCondition;