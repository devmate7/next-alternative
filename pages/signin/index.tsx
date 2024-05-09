import Hint from '@/components/hint';
import OAuth from '@/components/account/oauth';
import Head from 'next/head';
import { useId, useState } from 'react';

export default function Signin() {
	const email = useId();
	const persistent = useId();
	const [valid, setValid] = useState(false);

	return <></>;
}
