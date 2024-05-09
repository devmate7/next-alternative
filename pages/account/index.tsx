import Layout from '@/layouts/account';
import Head from 'next/head';

export default function Account() {
	return (
		<>
			<Head>
				<title>總覽 - 會員中心</title>
			</Head>

			<Layout>
				<h1 className="text-4xl">總覽</h1>
			</Layout>
		</>
	);
}
