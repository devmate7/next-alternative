import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
	tableName: 'Test',
	timestamps: false
})
export default class Test extends Model<Test> {
	@PrimaryKey
	@Column
	declare id: number;

	@Column
	declare done: boolean;

	@Column
	declare message: string;
}
