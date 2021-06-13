import React, { useRef } from 'react';

export default function WhiteTile() {
	const tile = useRef(null);

	return (
		<div
			className="maze-tile white-tile"
			style={{ backgroundColor: 'white' }}
			ref={tile}
		></div>
	);
}
