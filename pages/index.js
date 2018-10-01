import Link from 'next/link';

const Index = () => (
	<section>
		<h1>Hello world</h1>
		<Link href="/about">
			<a title="About NextJS">About</a>
		</Link>
	</section>
);

export default Index;