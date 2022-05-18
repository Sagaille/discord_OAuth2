import { PassportStrategy } from '@nestjs/passport';
import {
	HttpService,
	Injectable,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-oauth2';
import { stringify } from 'querystring';

// change these to be your Discord client ID and secret - should be in .env to be cleaner
const clientID = '';  
const clientSecret = '';  
const callbackURL = 'http://localhost:8080/auth/discord';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord')
{
	constructor(
		private authService: AuthService,
		private http: HttpService,
	) {
		// super calls the constructor of the extended class
		super({
			authorizationURL: `https://discordapp.com/api/oauth2/authorize?${ stringify({
				client_id    : clientID,
				redirect_uri : callbackURL,
				response_type: 'code',
				scope        : 'identify',
			}) }`,
			tokenURL        : 'https://discordapp.com/api/oauth2/token',
			scope           : 'identify',
			clientID,
			clientSecret,
			callbackURL,
		});
	}

	async validate(
		accessToken: string,
	): Promise<any> {
		const { data } = await this.http.get('https://discordapp.com/api/users/@me', {
				headers: { Authorization: `Bearer ${ accessToken }` },
			})
			.toPromise();

		return this.authService.findUserFromDiscordId(data.id);
	}
}
