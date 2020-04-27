import React, {useState} from 'react';

const Winner = ({superhero1, superhero2, chosenBattle}) => {
  // const [superhero1Total, setSuperhero1Total] = useState(0);
  // const [superhero2Total, setSuperhero2Total] = useState(0);

  const whoIsWinner = () => {
    const hero1 = superhero1[0].powerstats[chosenBattle];
    const hero1Int = parseInt(hero1);

    const hero2 = superhero2[0].powerstats[chosenBattle];
    const hero2Int = parseInt(hero2);

    if (hero1Int > hero2Int) {
      return superhero1[0].name;
    } else if (hero1Int < hero2Int) {
      return superhero2[0].name;
    } else if (hero1Int === hero2Int) {
      return `Both! It's a tie!`;
    }
  }

  return (
    <section>
      <h2>The winner of the battle of {chosenBattle} is {whoIsWinner()}</h2>
      <div className="Winner-resultContainer">
        <div className="Winner-imgContainer">
          <img src={superhero1[0].image.url} alt={superhero1[0].name} className={ whoIsWinner() === superhero1[0].name ? null : 'grayscale' } />
        </div>
        <div>{superhero1[0].powerstats[chosenBattle]}</div>
      </div>
      <div className="Winner-resultContainer">
        <div className="Winner-imgContainer">
          <img src={superhero2[0].image.url} alt={superhero2[0].name} className={whoIsWinner() === superhero2[0].name ? null : 'grayscale'} />
        </div>
        <div>{superhero2[0].powerstats[chosenBattle]}</div>
      </div>
    </section>
  )
}

export default Winner;