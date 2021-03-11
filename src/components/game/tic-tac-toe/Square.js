import React from 'react'

export default function Square(props) {

  const squareClickHandle = () => {
    if (props.winner === "None") {
      if (props.currentValue === "") {
        props.changeCurrentValue(props.currentTurn);
        props.changeCurrentTurn();
      }
    }
  } 

  return (
    <div 
      className="square"
      onClick={squareClickHandle}>
      <div className="inner-square">
        {props.currentValue}
      </div>
    </div>
  )
}
