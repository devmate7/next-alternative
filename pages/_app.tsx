import '@/styles/global.css';

import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const path = usePathname();

	useEffect(
		() => void import('preline/preline').then(
			({ HSStaticMethods }) => HSStaticMethods.autoInit()
		),
		[path]
	);

	return <Component {...pageProps} />;
}
