import type { IconBaseProps } from 'react-icons';
import Item from './item';
import { ReactNode } from 'react';

export type MenuProps = {
	children: ReactNode;
	icon?: React.ComponentType<IconBaseProps>;
};

export default Object.assign(Menu, { Item });

function Menu({ children, icon: Icon }: MenuProps) {
	return (
		<li className="hs-accordion">
			<button
				type="button"
				className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white">
				{Icon && <Icon size={24} />}
				<svg
					className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
					className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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

			<div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
				<ul className="pt-2 ps-2">{children}</ul>
			</div>
		</li>
	);
}
