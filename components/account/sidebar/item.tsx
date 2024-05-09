import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import type { IconType } from 'react-icons';

export type ItemProps = {
	children: ReactNode;
	href: string;
	icon?: ReactNode;
};

export default function Item({ children: text, icon, href }: ItemProps) {
	const router = useRouter();
	const active = href === router.pathname;

	return (
		<li>
			<Link
				{...{ href }}
				className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 ${
					active
						? 'bg-gray-100 dark:bg-neutral-700 dark:text-white'
						: 'dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300'
				}`}>
				{icon}
				{text}
			</Link>
		</li>
	);
}
