import React from 'react';

export default function BlackTile(props) {
	const triggerBlackSquare = () => {
		if (props.gameStarted && props.gameOver === false) {
			props.triggerGameOver();
		}
	};

	return (
		<div
			className="maze-tile black-tile"
			onMouseEnter={triggerBlackSquare}
		></div>
	);
}
