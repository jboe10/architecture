import React, { useRef } from 'react'

export default function StartTile(props) {
  const tile = useRef(null);

  const startGameTriggerHandle = () => {
    if (!props.gameStarted) {
      props.triggerGameStarted();
    }
  }

  return (
    <div 
      className="maze-tile start-tile" 
      ref={tile}
      onMouseEnter={startGameTriggerHandle}
      >
    </div>
  )
}
