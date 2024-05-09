import Layout from '@/layouts/account';
import Head from 'next/head';

export default function Transaction() {
	return (
		<>
			<Head>
				<title>交易 - 會員中心</title>
			</Head>

			<Layout>
				<h1 className="text-4xl">交易</h1>
			</Layout>
		</>
	);
}
