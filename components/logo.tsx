import Image from 'next/image';

export default function Logo() {
	return (
		<Image
			src="https://dummyimage.com/128x32/"
			alt="Logo"
			width={128}
			height={32}
		/>
	);
}
