import React from 'react';
import SelectHeroes from './SelectHeroes';
import BattleCondition from './BattleCondition';


const Dropdown = ({ superheroData, handleSuperheroChange, disableSuperhero1, disableSuperhero2, handleBattleChange, chosenBattle }) => {

  return (
    <form action="">
      <SelectHeroes superheroData={superheroData} handleChange={handleSuperheroChange} disabled={disableSuperhero1} />
      <SelectHeroes superheroData={superheroData} handleChange={handleSuperheroChange} disabled={disableSuperhero2} />
      <BattleCondition handleChange={handleBattleChange} chosenBattle={chosenBattle} />
    </form>
  )
}

export default Dropdown;