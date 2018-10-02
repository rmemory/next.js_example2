import React, { Component } from 'react';
import Meta from './Meta';

class MyMain extends Component {
	render() {
		return (
			<div>
				<Meta />
				{this.props.children}
			</div>
		);
	}
}

export default MyMain;