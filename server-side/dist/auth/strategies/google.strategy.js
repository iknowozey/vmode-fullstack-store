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
exports.GoogleStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {
    configService;
    constructor(configService) {
        const clientID = configService.get('GOOGLE_CLIENT_ID');
        const clientSecret = configService.get('GOOGLE_CLIENT_SECRET');
        const serverUrl = configService.get('SERVER_URL');
        if (!clientID || !clientSecret || !serverUrl) {
            throw new Error('Не настроены переменные окружения GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET или SERVER_URL.');
        }
        super({
            clientID: clientID,
            clientSecret: clientSecret,
            callbackURL: serverUrl + '/auth/google/callback',
            scope: ['profile', 'email']
        });
        this.configService = configService;
    }
    async validate(_accessToken, _refreshToken, profile, done) {
        const { displayName, emails, photos } = profile;
        const email = emails && emails.length > 0 ? emails[0].value : undefined;
        const picture = photos && photos.length > 0 ? photos[0].value : undefined;
        const user = {
            email: email,
            name: displayName,
            picture: picture
        };
        done(null, user);
    }
};
exports.GoogleStrategy = GoogleStrategy;
exports.GoogleStrategy = GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], GoogleStrategy);
//# sourceMappingURL=google.strategy.js.map