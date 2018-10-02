import Document, {Head, Main, NextScript} from 'next/document';

/* Pages in Next.js skip the definition of the surrounding document's markup.
 * For example, you never include <html>, <body>, etc. To override that default
 * behavior, you must create a file at ./pages/_document.js, where you can 
 * extend the Document class as is done here.
 * 
 * _document is only rendered on the server side and not on the client side
 * Event handlers like onClick can't be added to this file.
 * 
 * Is used to change the initial server side rendered document markup
 * 
 * Commonly used to implement server side rendering for css-in-js libraries
 * like styled-components, glamorous or emotion. Note that styled-jsx is 
 * included with Next.js by default.
 */

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<html>
				<Head />
				<body>
					<Main/>
					<NextScript />
				</body>
			</html>
		)
	}
}