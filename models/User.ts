import { Column, Model, Table } from 'sequelize-typescript';

@Table({
	tableName: 'User'
})
export default class User extends Model<User> {
	@Column
	SN!: number;

	@Column
	Username!: string;

	@Column
	['E-mail']!: string;

	@Column
	PasswordHash!: string;

	@Column
	FirstName!: string;

	@Column
	LastName!: string;

	@Column
	Nickname!: string;

	@Column
	Phone!: string;

	@Column
	JobTitle!: string;

	@Column
	Intro!: string;

	@Column
	Resume!: string;

	@Column
	Birthday!: Date;

	@Column
	WhenRegistered!: Date;

	@Column
	WhenDeactivated!: Date;

	@Column
	WhenQualified!: Date;

	@Column
	PFPSN!: string;

	@Column
	ApproverSN!: number;
}
