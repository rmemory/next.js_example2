// next.js requires me to use their head
import Head from 'next/head';

/*
 * Insert general css here
 */
const Meta = () => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charSet="utf-8" />
		<link rel="shortcut icon" href="/static/favicon.png" />
		<title>Next JS</title>
		<link rel="stylesheet" href="/_next/static/style.css"/>
	</Head>
);

export default Meta;
