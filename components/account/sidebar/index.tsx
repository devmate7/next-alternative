import * as collection from 'react-icons/fa6';
import Menu from './menu';
import Logo from '@/components/logo';
import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';

type Link = {
	href: string;
	icon?: string;
	text: string;
};

type Menu = {
	icon: ReactNode;
	href: string;
	text: string;
};

type SidebarProps = {
	menu: Menu[];
};

export default function Sidebar({ menu }: SidebarProps) {
	return (
		<div
			id="sidebar"
			className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700">
			<div className="px-8 pt-4">
				<Link
					className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
					href="/account"
					aria-label="Preline">
					<Logo />
				</Link>
			</div>

			<nav
				className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
				data-hs-accordion-always-open>
				<ul className="space-y-1.5">
					<li
						className="hs-accordion"
						id="users-accordion">
						<button
							type="button"
							className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white">
							<svg
								className="flex-shrink-0 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
								<circle
									cx={9}
									cy={7}
									r={4}
								/>
								<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
								<path d="M16 3.13a4 4 0 0 1 0 7.75" />
							</svg>
							Users
							<svg
								className="hs-accordion-active:block ms-auto hidden size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="m18 15-6-6-6 6" />
							</svg>
							<svg
								className="hs-accordion-active:hidden ms-auto block size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="m6 9 6 6 6-6" />
							</svg>
						</button>
						<div
							id="users-accordion-child"
							className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
							<ul
								className="hs-accordion-group ps-3 pt-2"
								data-hs-accordion-always-open="">
								<li
									className="hs-accordion"
									id="users-accordion-sub-1">
									<button
										type="button"
										className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white">
										Sub Menu 1
										<svg
											className="hs-accordion-active:block ms-auto hidden size-4"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="m18 15-6-6-6 6" />
										</svg>
										<svg
											className="hs-accordion-active:hidden ms-auto block size-4"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="m6 9 6 6 6-6" />
										</svg>
									</button>
									<div
										id="users-accordion-sub-1-child"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
										<ul className="pt-2 ps-2">
											<li>
												<a
													className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
													href="#">
													Link 1
												</a>
											</li>
											<li>
												<a
													className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
													href="#">
													Link 2
												</a>
											</li>
											<li>
												<a
													className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
													href="#">
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li
									className="hs-accordion"
									id="users-accordion-sub-2">
									<button
										type="button"
										className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white">
										Sub Menu 2
										<svg
											className="hs-accordion-active:block ms-auto hidden size-4"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="m18 15-6-6-6 6" />
										</svg>
										<svg
											className="hs-accordion-active:hidden ms-auto block size-4"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="m6 9 6 6 6-6" />
										</svg>
									</button>
									<div
										id="users-accordion-sub-2-child"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ps-2">
										<ul className="pt-2 ps-2">
											<li>
												<a
													className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
													href="#">
													Link 1
												</a>
											</li>
											<li>
												<a
													className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
													href="#">
													Link 2
												</a>
											</li>
											<li>
												<a
													className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
													href="#">
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li
						className="hs-accordion"
						id="account-accordion">
						<button
							type="button"
							className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white">
							<svg
								className="flex-shrink-0 mt-0.5 size-4"
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
									cx={18}
									cy={15}
									r={3}
								/>
								<circle
									cx={9}
									cy={7}
									r={4}
								/>
								<path d="M10 15H6a4 4 0 0 0-4 4v2" />
								<path d="m21.7 16.4-.9-.3" />
								<path d="m15.2 13.9-.9-.3" />
								<path d="m16.6 18.7.3-.9" />
								<path d="m19.1 12.2.3-.9" />
								<path d="m19.6 18.7-.4-1" />
								<path d="m16.8 12.3-.4-1" />
								<path d="m14.3 16.6 1-.4" />
								<path d="m20.7 13.8 1-.4" />
							</svg>
							Account
							<svg
								className="hs-accordion-active:block ms-auto hidden size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="m18 15-6-6-6 6" />
							</svg>
							<svg
								className="hs-accordion-active:hidden ms-auto block size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="m6 9 6 6 6-6" />
							</svg>
						</button>
						<div
							id="account-accordion-child"
							className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
							<ul className="pt-2 ps-2">
								<li>
									<a
										className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
										href="#">
										Link 1
									</a>
								</li>
								<li>
									<a
										className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
										href="#">
										Link 2
									</a>
								</li>
								<li>
									<a
										className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
										href="#">
										Link 3
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li
						className="hs-accordion"
						id="projects-accordion">
						<button
							type="button"
							className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white">
							<svg
								className="flex-shrink-0 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<rect
									width={20}
									height={14}
									x={2}
									y={7}
									rx={2}
									ry={2}
								/>
								<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
							</svg>
							Projects
							<svg
								className="hs-accordion-active:block ms-auto hidden size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="m18 15-6-6-6 6" />
							</svg>
							<svg
								className="hs-accordion-active:hidden ms-auto block size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="m6 9 6 6 6-6" />
							</svg>
						</button>
						<div
							id="projects-accordion-child"
							className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
							<ul className="pt-2 ps-2">
								<li>
									<a
										className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
										href="#">
										Link 1
									</a>
								</li>
								<li>
									<a
										className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
										href="#">
										Link 2
									</a>
								</li>
								<li>
									<a
										className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
										href="#">
										Link 3
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
}

function render({ icon, href, text }: Link, index: number) {
	const Parent = href ? Fragment : Menu;
	const Icon = collection[icon as keyof typeof collection];

	return (
		<Parent key={index}>
			<Menu.Item
				{...{ href }}
				icon={<Icon />}>
				{text}
			</Menu.Item>
		</Parent>
	);
}
