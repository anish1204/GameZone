import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div className='card-container'>
        <div className="game-logo">
         
        </div>
        <div className="game-info">
          {/* <div className="game-title"> */}
            <p className='card-title'>Game Title</p>
            <p className='date'>Release Date : DD/MM/YYYY </p>
            <p className='summary'>[Summary] tem nemo minima, rerum dolorem quas architecto. Temporibus odio a quia quisquam modi!</p>
          {/* </div> */}
        
        </div>
        <div className="card-no">
              <div className="number-logo">
                <p>9</p>
              </div>
        </div>
    </div>
  )
}

export default Card
