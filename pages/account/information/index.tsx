import Layout from '@/layouts/account';
import Head from 'next/head';

export default function Information() {
	return (
		<>
			<Head>
				<title>個人資料 - 會員中心</title>
			</Head>

			<Layout>
				<h1 className="text-4xl">個人資料</h1>
			</Layout>
		</>
	);
}
