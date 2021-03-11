import React from 'react'

export default function EndTile(props) {

  const mouseEnterEndTileHandle = () => {
    console.log(props.gameOver)
    if (props.gameStarted && props.gameOver === false) {
      props.triggerGameWon();
    }
  }

  return (
    <div 
      className="maze-tile end-tile" 
      onMouseEnter={mouseEnterEndTileHandle}
    >
    </div>
  )
}
