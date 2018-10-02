import React, { Component } from 'react';
import Link from 'next/link';

import './Navbar.scss';

class Navbar extends Component {
	render() {
		return (
			<nav>
				<div>
					<Link href="/about">
						<a title="About Next">About</a>
					</Link>
					<Link href="/">
						<a title="Our API">Home</a>
					</Link>
					<mark className="badge">
						Hello!
					</mark>
				</div>
			</nav>
		);
	}
}

export default Navbar;