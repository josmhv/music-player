import React from 'react';

class Links extends React.Component {
	render() {
		return (
			<div className="links">
				<li className="nav__item" id={this.props.id}>
					{this.props.texto}
				</li>
			</div>
		);
	}
}

export default Links;
