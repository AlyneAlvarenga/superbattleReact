import React from 'react';
import SelectHeroes from './SelectHeroes';
import BattleCondition from './BattleCondition';
import './Dropdown.css';


const Dropdown = ({ superheroData, handleSuperheroChange, disableSuperhero1, disableSuperhero2, handleBattleChange, chosenBattle, disableBattle }) => {

  return (
    <form action="">
      <div className="Dropdown-heroesContainer">
        <SelectHeroes superheroData={superheroData} handleChange={handleSuperheroChange} disabled={disableSuperhero1} />
        <SelectHeroes superheroData={superheroData} handleChange={handleSuperheroChange} disabled={disableSuperhero2} />
      </div>
      <div className="Dropdown-battleContainer">
        <BattleCondition handleChange={handleBattleChange} chosenBattle={chosenBattle} disableBattle={disableBattle} />
      </div>
    </form>
  )
}

export default Dropdown;