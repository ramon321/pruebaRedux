import React from 'react';
import { Container } from 'semantic-ui-react'

class BaseLayout extends React.Component {
	render() {
		return (
			<Container>
				{ this.props.children }
			</Container>
		);
	}
}

export default BaseLayout;