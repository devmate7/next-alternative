import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	done: boolean;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({
		done: true
	});
}
