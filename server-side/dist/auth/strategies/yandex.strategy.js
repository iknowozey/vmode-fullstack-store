"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YandexStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_yandex_1 = require("passport-yandex");
let YandexStrategy = class YandexStrategy extends (0, passport_1.PassportStrategy)(passport_yandex_1.Strategy, 'yandex') {
    configService;
    constructor(configService) {
        const clientID = configService.get('YANDEX_CLIENT_ID');
        const clientSecret = configService.get('YANDEX_CLIENT_SECRET');
        const serverUrl = configService.get('SERVER_URL');
        if (!clientID || !clientSecret || !serverUrl) {
            throw new Error('Не настроены переменные окружения YANDEX_CLIENT_ID, YANDEX_CLIENT_SECRET или SERVER_URL.');
        }
        super({
            clientID: clientID,
            clientSecret: clientSecret,
            callbackURL: serverUrl + '/auth/yandex/callback'
        });
        this.configService = configService;
    }
    async validate(_accessToken, _refreshToken, profile, done) {
        const { userName, emails, photos } = profile;
        const email = emails && emails.length > 0 ? emails[0].value : undefined;
        const picture = photos && photos.length > 0 ? photos[0].value : undefined;
        const user = {
            email: email,
            name: userName,
            picture: picture
        };
        done(null, user);
    }
};
exports.YandexStrategy = YandexStrategy;
exports.YandexStrategy = YandexStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], YandexStrategy);
//# sourceMappingURL=yandex.strategy.js.map