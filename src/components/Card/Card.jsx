import React from 'react'
import './Card.css'
const Card = ({ game }) => {
  return (
    <>
      <div className='card-container'>
        <div className="game-logo">

        </div>
        <div className="game-info">
          <p className='card-title'>{game.attributes.name}</p>
          <p className='date'>Release Date : {game.attributes.firstReleaseDate.split('T')[0]} </p>
          <p className='summary'>[Summary] {game.attributes.summary}</p>
        </div>
        <div className="card-no">
          <div className="number-logo">
            <p>{game.id % 100}</p>
          </div>
        </div>
      </div>
      <div className="mb-card-container">
        
        <div className="game-logo">
        <div className="card-no">
          <div className="number-logo">
            <p>{game.id % 100}</p>
          </div>
        </div>
        </div>
        <div className="game-info">
          <p className='card-title'>{game.attributes.name}</p>
          <p className='date'>Release Date : {game.attributes.firstReleaseDate.split('T')[0]} </p>
          <p className='summary'>[Summary] {game.attributes.summary}</p>
        </div>
        
      </div>

    </>

  )
}

export default Card
