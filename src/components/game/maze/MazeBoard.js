import React, { useRef, useState, useEffect } from 'react'
import BlackTile from './tiles/BlackTile'
import EndTile from './tiles/EndTile'
import StartTile from './tiles/StartTile'
import WhiteTile from './tiles/WhiteTile';

const startingHeightWidth = '500';

export default function MazeBoard() {

  const board = useRef(null);
  const [gameStarted , setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameCount, setGameCount] = useState(1);
  
  const BlackTiles =  <BlackTile
    gameStarted={gameStarted}
    gameOver={gameOver}
    gameWon={gameWon}
    triggerGameOver={()=>setGameOver(true)}
  />

  // add game tally if game win
  useEffect(() => {
    const newGame = () => {
      if (gameWon) {
        setGameCount(gameCount + 1);
      } 
      setGameStarted(false);
      setGameWon(false);
      setGameOver(false);
    } 
    const boardRef = board.current;

    if (boardRef) {
      boardRef.addEventListener('mouseleave' , newGame());
    }

    return () => {
      if (boardRef) {
        boardRef.removeEventListener('mouseleave' , newGame());
      }
    }
  }, [gameWon, gameCount])

  useEffect(() => {
    if (gameOver) {
      setGameCount(1);
    }
  }, [gameOver])

  useEffect(() => {
    if (board.current) {
      board.current.style.width = `${startingHeightWidth/gameCount}px`;
      board.current.style.height = `${startingHeightWidth/gameCount}px`;
    }
  }, [gameCount])

  const cheaterProtection = () => {
    if (gameStarted && gameWon === false) {
      setGameOver(true);
    }
  }
  return (
    <>
      <div className="maze-board-wrap" >
        <div 
          className="maze-board" 
          onMouseLeave={cheaterProtection}
          ref={board}
        >
          <div className="maze-row">
            {BlackTiles}
            {BlackTiles}
            <StartTile
              gameStarted={gameStarted}
              triggerGameStarted={()=>setGameStarted(true)}
            /> 
            {BlackTiles}
            {BlackTiles}
          </div>
          <div className="maze-row">
            <WhiteTile/>
            <WhiteTile/>
            <WhiteTile/>
            {BlackTiles}
            {BlackTiles}
          </div> 
          <div className="maze-row">
            <WhiteTile/>
            {BlackTiles}
            {BlackTiles}
            {BlackTiles}
            {BlackTiles}
          </div>
          <div className="maze-row">
            <WhiteTile/>
            <WhiteTile/>
            <WhiteTile/>
            {BlackTiles}
            {BlackTiles}
          </div>
          <div className="maze-row">
            {BlackTiles}
            {BlackTiles}
            <WhiteTile/>
            <EndTile
              gameStarted={gameStarted}
              gameOver={gameOver}
              triggerGameWon={()=>setGameWon(true)}
            />
            {BlackTiles}
          </div>
        </div>
      </div>
    </>
  )
}
