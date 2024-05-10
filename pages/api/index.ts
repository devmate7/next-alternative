import sequelize from '@/handlers/sequelize';
import Test from '@/models/Test';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<typeof Test>
) {
	res.status(200).json(await sequelize.models.Test.findByPk(1));
}
