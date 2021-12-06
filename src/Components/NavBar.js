import React from 'react';
import Links from './Links';
import $ from 'jquery';

class NavBar extends React.Component {
	handleClick(e) {
		const id = e.target.id;
		if (id === 'uploadFiles') this.renderGUI(id);
		if (id === 'playMusic') this.renderGUI(id);
	}

	renderGUI(id) {
		$(`.${id}`).toggle();
	}

	render() {
		return (
			<div>
				<nav className="nav">
					<ul onClick={this.handleClick.bind(this)} className="nav__links">
						<Links texto={'Añadir canciones'} id={'uploadFiles'} />
						<Links texto={'Reproducir Musica'} id={'playMusic'} />
						<br />
						<hr />
						<br />
					</ul>
				</nav>
			</div>
		);
	}
}

export default NavBar;
