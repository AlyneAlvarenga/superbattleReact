import React from 'react';

const Winner = ({superhero1, superhero2, chosenBattle, percentages}) => {

  const whoIsWinner = () => {
    if (percentages[0] > percentages[1]) {
      return superhero1[0].name;
    } else if (percentages[0] < percentages[1]) {
      return superhero2[0].name;
    } else if (percentages[0] === percentages[1]) {
      return `Both! It's a tie!`;
    }
  }

  return (
    <section>
      <h2>The winner of the battle of {chosenBattle} is {whoIsWinner()}</h2>
      <div className="Winner-resultContainer">
        <div className="Winner-imgContainer">
          <img src={superhero1[0].image.url} alt={superhero1[0].name} className={percentages[0] > percentages[1] ? null : 'grayscale'} />
        </div>
        <div className="Winner-circleContainer">
          <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="svgGroup">
              <circle className="baseCircle" cx="50" cy="50" r="45" />
              <path className="secondCircleHero1" strokeDasharray={`${percentages[0]} 283`} d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0"></path>
            </g>
          </svg>
          <span className="circleLabel circleLabelHero1">{`${superhero1[0].powerstats[chosenBattle]}%`}</span>
        </div>
      </div>
      <div className="Winner-resultContainer">
        <div className="Winner-imgContainer">
          <img src={superhero2[0].image.url} alt={superhero2[0].name} className={percentages[1] > percentages[0] ? null : 'grayscale'} />
        </div>
        <div className="Winner-circleContainer">
          <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="svgGroup">
              <circle className="baseCircle" cx="50" cy="50" r="45" />
              <path className="secondCircleHero2" strokeDasharray={`${percentages[1]} 283`} d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0"></path>
            </g>
          </svg>
          <span className="circleLabel circleLabelHero2">{`${superhero2[0].powerstats[chosenBattle]}%`}</span>
        </div>
      </div>
    </section>
  )
}

export default Winner;