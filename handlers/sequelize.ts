import { env } from 'process';
import type { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
	dialect: env.DB_DRIVER as Dialect,
	logging: false,
	storage: `${env.PWD}/${env.DB_DATABASE}`,

	models: [`${env.PWD}/models`]
});

try {
	await sequelize.authenticate();
	await sequelize.sync();

	console.info('\x1b[97;102m', 'Database connected successfully', '\x1b[0m');
} catch (e) {
	console.error('\x1b[97;101m', 'Failed to connect database:', e, '\x1b[0m');
}

export default sequelize;
