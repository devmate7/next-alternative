import { ReactNode } from 'react';
import Breadcrumb from '@/components/account/header/breadcrumb';
import Header from '@/components/account/header';
import Sidebar from '@/components/account/sidebar';
import Table from '@/components/table';
import Card from '@/components/card';
import type { Fruitful } from '@/types/account';

const menu = [
	{
		icon: 'FaRegCircleUser',
		href: '/account',
		text: '總覽'
	},

	{
		icon: 'FaRegAddressCard',
		href: '/account/information',
		text: '個人資料'
	},

	{
		icon: 'FaShieldHalved',
		href: '/account/security',
		text: '安全'
	},

	{
		icon: 'FaRegCreditCard',
		href: '/account/transaction',
		text: '交易'
	}
];

export default function Layout({ children }: Fruitful) {
	return (
		<>
			<Header />
			<Breadcrumb />
			<Sidebar {...{ menu }} />
			{/* ========== MAIN CONTENT ========== */}
			{/* Content */}
			<div className="w-full lg:ps-64">
				<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
					{/* Grid */}
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
						{/* Card */}
						<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
							<div className="p-4 md:p-5">
								<div className="flex items-center gap-x-2">
									<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
										Total users
									</p>
									<div className="hs-tooltip">
										<div className="hs-tooltip-toggle">
											<svg
												className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
												xmlns="http://www.w3.org/2000/svg"
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round">
												<circle
													cx={12}
													cy={12}
													r={10}
												/>
												<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
												<path d="M12 17h.01" />
											</svg>
											<span
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
												role="tooltip">
												The number of daily users
											</span>
										</div>
									</div>
								</div>
								<div className="mt-1 flex items-center gap-x-2">
									<h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
										72,540
									</h3>
									<span className="flex items-center gap-x-1 text-green-600">
										<svg
											className="inline-block size-4 self-center"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
											<polyline points="16 7 22 7 22 13" />
										</svg>
										<span className="inline-block text-sm">1.7%</span>
									</span>
								</div>
							</div>
						</div>
						{/* End Card */}
						{/* Card */}
						<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
							<div className="p-4 md:p-5">
								<div className="flex items-center gap-x-2">
									<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
										Sessions
									</p>
								</div>
								<div className="mt-1 flex items-center gap-x-2">
									<h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
										29.4%
									</h3>
								</div>
							</div>
						</div>
						{/* End Card */}
						{/* Card */}
						<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
							<div className="p-4 md:p-5">
								<div className="flex items-center gap-x-2">
									<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
										Avg. Click Rate
									</p>
								</div>
								<div className="mt-1 flex items-center gap-x-2">
									<h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
										56.8%
									</h3>
									<span className="flex items-center gap-x-1 text-red-600">
										<svg
											className="inline-block size-4 self-center"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
											<polyline points="16 17 22 17 22 11" />
										</svg>
										<span className="inline-block text-sm">1.7%</span>
									</span>
								</div>
							</div>
						</div>
						{/* End Card */}
						{/* Card */}
						<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
							<div className="p-4 md:p-5">
								<div className="flex items-center gap-x-2">
									<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
										Pageviews
									</p>
								</div>
								<div className="mt-1 flex items-center gap-x-2">
									<h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
										92,913
									</h3>
								</div>
							</div>
						</div>
						{/* End Card */}
					</div>
					<Card>
						<Table />
					</Card>
				</div>
			</div>
			{/* End Content */}
			{/* ========== END MAIN CONTENT ========== */}
		</>
	);
}