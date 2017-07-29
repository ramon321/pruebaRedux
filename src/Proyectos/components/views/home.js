import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Captura from './Capturar';
import Mostrar from './Mostrar';

export default class App extends Component {
	render() {
		return (
			<Grid>
				<Grid.Row>
					<Grid.Column width={8}>
						<Captura />
					</Grid.Column>
					<Grid.Column width={8}>
						<br />
						<Mostrar />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
