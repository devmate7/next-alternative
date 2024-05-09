import OAuth from '.';
import { BsLine } from 'react-icons/bs';

export default function LINE() {
	const target = 'https://access.line.me/oauth2/v2.1/authorize';
	const search = new URLSearchParams({
		response_type: 'code',
		client_id: process.env.LINE_CHANNEL_ID as string,
		redirect_uri: '',
		state: crypto.randomUUID(),
		scope: encodeURIComponent('profile openid'),
		code_challenge: '',
		code_challenge_method: 'S256'
	});

	return (
		<OAuth
			icon={BsLine}
			name="LINE"
			onClick={() => location.assign(`${target}?${search}`)}
		/>
	);
}
