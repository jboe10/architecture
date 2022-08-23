import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import MazeBoard from '../game/maze/MazeBoard';
import ContactPageBanner from '../modules/ContactPageBanner';

export default function GamePage() {
	return (
		<div className="game-page">
			<Header />
			<div className="games">
				<div className="maze">
					<h1>Shrinking Maze</h1>
					<MazeBoard />
				</div>
			</div>
			<ContactPageBanner />
			<Footer />
		</div>
	);
}
