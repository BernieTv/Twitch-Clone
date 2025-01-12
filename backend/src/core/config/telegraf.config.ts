import { ConfigService } from '@nestjs/config'
import type { TelegrafModuleOptions } from 'nestjs-telegraf'

export function getTelegrafConfig(
	configService: ConfigService
): TelegrafModuleOptions {
	return {
		token: configService.getOrThrow<string>('TELEGRAM_BOT_TOKEN'),
		options: {
			handlerTimeout: 1_000_000
		}
	}
}
