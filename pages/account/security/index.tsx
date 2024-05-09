import Layout from '@/layouts/account';
import Table from '@/components/table';
import Head from 'next/head';

export default function Security() {
	return (
		<>
			<Head>
				<title>安全 - 帳戶中心</title>
			</Head>

			<Layout>
				<h1 className="text-4xl">安全</h1>
			</Layout>
		</>
	);
}
