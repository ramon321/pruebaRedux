import React from 'react';
import { BrowserRouter }from 'react-router-dom'

import routes from './routes';
import BaseLayout from './components/layouts/BaseLayout';
export reducers from './reducers';


class Base extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<BaseLayout>
					{ routes }
				</BaseLayout>
			</BrowserRouter>	
		);
	}
}

export default Base;