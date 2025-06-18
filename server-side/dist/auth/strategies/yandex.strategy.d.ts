import { ConfigService } from '@nestjs/config';
import { Profile, Strategy } from 'passport-yandex';
declare const YandexStrategy_base: new (config: import("passport-yandex").Config) => Strategy<unknown> & {
    validate(...args: any[]): unknown;
};
export declare class YandexStrategy extends YandexStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(_accessToken: string, _refreshToken: string, profile: Profile, done: any): Promise<any>;
}
export {};
