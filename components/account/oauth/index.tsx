import type { IconBaseProps } from 'react-icons';
import Google from './google';
import LINE from './line';
import { MouseEventHandler } from 'react';

type OAuthProps = {
	icon: React.ComponentType<IconBaseProps>;
	name: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default Object.assign(OAuth, {
	Google,
	LINE
});

function OAuth({ icon: Icon, name, onClick }: OAuthProps) {
	return <></>;
}
