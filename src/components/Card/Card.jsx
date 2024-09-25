import React from 'react'
import './Card.css'
const Card = ({game}) => {
  return (
    <div className='card-container'>
        <div className="game-logo">
         
        </div>
        <div className="game-info">
          {/* <div className="game-title"> */}
            <p className='card-title'>{game.attributes.name}</p>
            <p className='date'>Release Date : {game.attributes.firstReleaseDate} </p>
            <p className='summary'>[Summary] {game.attributes.summary}</p>
          {/* </div> */}
        
        </div>
        <div className="card-no">
              <div className="number-logo">
                <p>{game.id%100}</p>
              </div>
        </div>
    </div>
  )
}

export default Card
