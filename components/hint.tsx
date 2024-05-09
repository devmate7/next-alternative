import type { IconBaseProps } from 'react-icons';
import { ReactNode } from 'react';
import { FaQuestion } from 'react-icons/fa6';

export type HintProps = {
	children: ReactNode;
	direction?: 'top' | 'right' | 'bottom' | 'left';
	icon?: React.ComponentType<IconBaseProps>;
};

export default function Hint({
	children: text,
	direction,
	icon: Icon = FaQuestion
}: HintProps) {
	return <></>;
}
