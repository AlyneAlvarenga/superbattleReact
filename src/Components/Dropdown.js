import React from 'react';
import Select from './Select';
import BattleCondition from './BattleCondition';


const Dropdown = ({ superheroData, handleSuperheroChange, disableSuperhero1, disableSuperhero2, handleBattleChange, chosenBattle }) => {

  return (
    <form action="">
      <Select superheroData={superheroData} handleChange={handleSuperheroChange} disabled={disableSuperhero1} />
      <Select superheroData={superheroData} handleChange={handleSuperheroChange} disabled={disableSuperhero2} />
      <BattleCondition handleChange={handleBattleChange} chosenBattle={chosenBattle} />
    </form>
  )
}

export default Dropdown;