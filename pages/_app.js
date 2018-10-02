import App, { Container } from 'next/app';

import MyMain from '../components/MyMain';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		
		// If the page has props, then those props will be surfaced
		// via pageProps, which are passed to the Component
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		// This exposes the query to the user
		pageProps.query = ctx.query;
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<MyMain>
					<Component {...pageProps}/>
				</MyMain>
			</Container>
		);
	}
}

export default MyApp;