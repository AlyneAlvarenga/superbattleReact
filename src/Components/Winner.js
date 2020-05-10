import React from 'react';
import './Winner.css';

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
      <h2>The winner of the Battle of <span className="Winner-fontSpan">{chosenBattle.toUpperCase()}</span> is... <span className="Winner-fontSpan">{whoIsWinner().toUpperCase()}</span>!</h2>
      <div className="Winner-resultsContainer">
        <div className="Winner-heroContainer">
          <h3>{superhero1[0].name}</h3>
          <div className="Winner-imgContainer">
            <img src={superhero1[0].image.url} alt={superhero1[0].name} className={percentages[0] > percentages[1] ? null : 'Winner-grayscale'} />
          </div>
          <div className="Winner-circleContainer">
            <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g className="Winner-svgGroup">
                <circle className="Winner-baseCircle" cx="50" cy="50" r="45" />
                <path className="Winner-secondCircle" strokeDasharray={`${percentages[0]} 283`} d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0"></path>
              </g>
            </svg>
            <span className="Winner-circleLabel">{`${superhero1[0].powerstats[chosenBattle]}%`}</span>
          </div>
        </div>
        <div className="Winner-heroContainer">
          <h3>{superhero2[0].name}</h3>
          <div className="Winner-imgContainer">
            <img src={superhero2[0].image.url} alt={superhero2[0].name} className={percentages[1] > percentages[0] ? null : 'Winner-grayscale'} />
          </div>
          <div className="Winner-circleContainer">
            <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g className="Winner-svgGroup">
                <circle className="Winner-baseCircle" cx="50" cy="50" r="45" />
                <path className="Winner-secondCircle" strokeDasharray={`${percentages[1]} 283`} d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0"></path>
              </g>
            </svg>
            <span className="Winner-circleLabel">{`${superhero2[0].powerstats[chosenBattle]}%`}</span>
          </div>
        </div>
      </div>
      {/* /.resultsContainer */}
    </section>
  )
}

export default Winner;