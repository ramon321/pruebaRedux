import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react';

import { editarProyecto } from '../../actions';

class Captura extends Component {
	render() {
		return (
			<Form>
				<Form.Field>
					<label>Titulo</label>
					<input name="_Titulo" onChange={this.props.onProyectoCambia} />
				</Form.Field>
				<Form.Field>
					<label>Descripcion</label>
					<textarea name="_Descripcion" onChange={this.props.onProyectoCambia} />
				</Form.Field>
			</Form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onProyectoCambia: e => {
			dispatch(editarProyecto(e.target.name, e.target.value))
		}
	}
}

export default connect(null, mapDispatchToProps)(Captura);
