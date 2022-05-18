import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService
{
	private readonly users: User[];

	constructor() {
		// change one of the below discord_id to your Discord ID, else you'll never be able to log in
		this.users = [
			{
				userId    : 1,
				name      : '',
				discord_id: '',
			},
			{
				userId    : 2,
				name      : 'david',
				discord_id: '',
			},
			{
				userId    : 3,
				name      : 'mariadb',
				discord_id: 'erh5ree45',
			},
		];
	}

	async findOne(
		field: string,
		discordId: string,
	): Promise<User | undefined> {
		return this.users.find(user => user[field] === discordId);
	}
}
