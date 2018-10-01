import React, { Component } from 'react';
import Link from 'next/link';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav>
					<div>
						<Link href="/about">
							<a title="About Next">About</a>
						</Link>
						<Link href="/">
							<a title="Our API">Home</a>
						</Link>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;