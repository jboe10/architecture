import React, { useState, useEffect } from 'react';
import Square from './Square';

const X = 'X';
const O = 'O';

export default function GameBoard() {
	const [currentTurn, setCurrentTurn] = useState(X);
	const [winner, setWinner] = useState('None');
	const [square2, setSquare2] = useState('');
	const [square1, setSquare1] = useState('');
	const [square3, setSquare3] = useState('');
	const [square4, setSquare4] = useState('');
	const [square5, setSquare5] = useState('');
	const [square6, setSquare6] = useState('');
	const [square7, setSquare7] = useState('');
	const [square8, setSquare8] = useState('');
	const [square9, setSquare9] = useState('');

	const resetHandle = () => {
		// set current turn
		setCurrentTurn(X);
		// reset winner
		setWinner('None');
		// reset squares
		setSquare1('');
		setSquare2('');
		setSquare3('');
		setSquare4('');
		setSquare5('');
		setSquare6('');
		setSquare7('');
		setSquare8('');
		setSquare9('');
	};

	const nextTurn = () => {
		if (currentTurn === O) {
			setCurrentTurn(X);
		} else {
			setCurrentTurn(O);
		}
	};

	useEffect(() => {
		const winnerCheck = (val1, val2, val3) => {
			if (val1 !== '' && val2 !== '' && val3 !== '') {
				if (val1 === val2 && val2 === val3) {
					return val1;
				} else {
					return '';
				}
			} else {
				return '';
			}
		};

		const checkForWinners = () => {
			// Top Row
			if (winnerCheck(square1, square2, square3) !== '') {
				setWinner(square1);
				setSquare1(<div className="winner">{square1}</div>);
				setSquare2(<div className="winner">{square2}</div>);
				setSquare3(<div className="winner">{square3}</div>);
			}
			// Middle Row
			if (winnerCheck(square4, square5, square6) !== '') {
				setWinner(square4);
				setSquare4(<div className="winner">{square4}</div>);
				setSquare5(<div className="winner">{square5}</div>);
				setSquare6(<div className="winner">{square6}</div>);
			}
			// Bottom Row
			if (winnerCheck(square7, square8, square9) !== '') {
				setWinner(square7);
				setSquare7(<div className="winner">{square7}</div>);
				setSquare8(<div className="winner">{square8}</div>);
				setSquare9(<div className="winner">{square9}</div>);
			}
			// Left
			if (winnerCheck(square1, square4, square7) !== '') {
				setWinner(square1);
				setSquare1(<div className="winner">{square1}</div>);
				setSquare4(<div className="winner">{square4}</div>);
				setSquare7(<div className="winner">{square7}</div>);
			}
			// Middle col
			if (winnerCheck(square2, square5, square8) !== '') {
				setWinner(square2);
				setSquare2(<div className="winner">{square2}</div>);
				setSquare5(<div className="winner">{square5}</div>);
				setSquare8(<div className="winner">{square8}</div>);
			}
			// Right col
			if (winnerCheck(square3, square6, square9) !== '') {
				setWinner(square3);
				setSquare3(<div className="winner">{square3}</div>);
				setSquare6(<div className="winner">{square6}</div>);
				setSquare9(<div className="winner">{square9}</div>);
			}
			// top left to bottom right
			if (winnerCheck(square1, square5, square9) !== '') {
				setWinner(square1);
				setSquare1(<div className="winner">{square1}</div>);
				setSquare5(<div className="winner">{square5}</div>);
				setSquare9(<div className="winner">{square9}</div>);
			}
			// top right to bottom left
			if (winnerCheck(square3, square5, square7) !== '') {
				setWinner(square3);
				setSquare3(<div className="winner">{square3}</div>);
				setSquare5(<div className="winner">{square5}</div>);
				setSquare7(<div className="winner">{square7}</div>);
			}
		};

		checkForWinners();
	}, [
		currentTurn,
		square1,
		square2,
		square3,
		square4,
		square5,
		square6,
		square7,
		square8,
		square9,
	]);

	return (
		<div className="game-board-wrap">
			<div className="game-board-items">
				<h2>Tic-Tac-Toe</h2>
				<h3>
					Current Turn: <span>{currentTurn}</span>
				</h3>
				<h3>
					Winner: <span>{winner}</span>
				</h3>
				<button className="reset-button" onClick={resetHandle}>
					Reset
				</button>
				<div className="game-board">
					<div className="row">
						<Square
							currentTurn={currentTurn}
							changeCurrentTurn={nextTurn}
							currentValue={square1}
							changeCurrentValue={setSquare1}
							winner={winner}
						/>
						<Square
							currentTurn={currentTurn}
							changeCurrentTurn={nextTurn}
							currentValue={square2}
							changeCurrentValue={setSquare2}
							winner={winner}
						/>
						<Square
							currentTurn={currentTurn}
							changeCurrentTurn={nextTurn}
							currentValue={square3}
							changeCurrentValue={setSquare3}
							winner={winner}
						/>
					</div>
					<div className="row">
						<Square
							currentTurn={currentTurn}
							changeCurrentTurn={nextTurn}
							currentValue={square4}
							changeCurrentValue={setSquare4}
							winner={winner}
						/>
						<Square
							currentTurn={currentTurn}
							changeCurrentTurn={nextTurn}
							currentValue={square5}
							changeCurrentValue={setSquare5}
							winner={winner}
						/>
						<Square
							currentTurn={currentTurn}
							changeCurrentTurn={nextTurn}
							currentValue={square6}
							changeCurrentValue={setSquare6}
							winner={winner}
						/>
					</div>
					<div className="row">
						<Square
							currentTurn={currentTurn}
							changeCurrentTurn={nextTurn}
							currentValue={square7}
							changeCurrentValue={setSquare7}
							winner={winner}
						/>
						<Square
							currentTurn={currentTurn}
							changeCurrentTurn={nextTurn}
							currentValue={square8}
							changeCurrentValue={setSquare8}
							winner={winner}
						/>
						<Square
							currentTurn={currentTurn}
							changeCurrentTurn={nextTurn}
							currentValue={square9}
							changeCurrentValue={setSquare9}
							winner={winner}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
