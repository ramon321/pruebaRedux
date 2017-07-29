import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react';

class Default extends Component {
	render() {
		const proyecto = this.props.proyecto ? this.props.proyecto : {};

		return (
			<Card>
				<Card.Content>
					<Card.Header>
						{ proyecto._Titulo }
					</Card.Header>
					<Card.Description>
						{ proyecto._Descripcion }
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}



const mapStateToProps = (base) => {
	const { proyecto } = base.Proyectos.state;
	return { proyecto };
}
export default connect(mapStateToProps)(Default);
