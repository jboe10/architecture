import React, { useState } from 'react';

const white = 'white';
const textBlack = 'text-black';
const textWhite = 'text-white';
export default function NavItem(props) {
	const [hoverBar, setHoverBar] = useState('nav-item-hover');

	const handleMouseEnter = () => {
		setHoverBar(`nav-item-hover on-enter`);
	};

	const handleMouseLeave = () => {
		setHoverBar(`nav-item-hover on-exit`);
	};

	return (
		<a
			href={props.link}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="nav-item-hover-wrap">
				<div className={hoverBar} />
			</div>
			<div className={props.headerColor === white ? textBlack : textWhite}>
				{props.name}
			</div>
		</a>
	);
}
