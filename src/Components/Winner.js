import React, {useState} from 'react';

const Winner = ({superhero1, superhero2, chosenBattle}) => {
  const [superhero1Percent, setSuperhero1Percent] = useState(0);
  const [superhero2Percent, setSuperhero2Percent] = useState(0);
  // const [superhero2Total, setSuperhero2Total] = useState(0);

  const drawCircles = (num1, num2) => {
    const percentageHero1 = (num1 * 283 / 100).toFixed(0);
    const percentageHero2 = (num2 * 283 / 100).toFixed(0);

    setSuperhero1Percent(percentageHero1);
    setSuperhero2Percent(percentageHero2);
  }

  const whoIsWinner = () => {
    const hero1 = superhero1[0].powerstats[chosenBattle];
    const hero1Int = parseInt(hero1);

    const hero2 = superhero2[0].powerstats[chosenBattle];
    const hero2Int = parseInt(hero2);

    drawCircles(hero1Int, hero2Int);

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
        <div className="Winner-circleContainer">
          <svg class="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="svgGroup">
              <circle class="baseCircle" cx="50" cy="50" r="45" />
              <path class="secondCircleHero1" stroke-dasharray={} d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0"></path>
            </g>
          </svg>
          <span class="circleLabel circleLabelHero1">{superhero1[0].powerstats[chosenBattle]}</span>
        </div>
      </div>
      <div className="Winner-resultContainer">
        <div className="Winner-imgContainer">
          <img src={superhero2[0].image.url} alt={superhero2[0].name} className={whoIsWinner() === superhero2[0].name ? null : 'grayscale'} />
        </div>
        <div className="Winner-circleContainer">
          <svg class="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="svgGroup">
              <circle class="baseCircle" cx="50" cy="50" r="45" />
              <path class="secondCircleHero2" d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0"></path>
            </g>
          </svg>
          <span class="circleLabel circleLabelHero2">{superhero2[0].powerstats[chosenBattle]}</span>
        </div>
      </div>
    </section>
  )
}

export default Winner;