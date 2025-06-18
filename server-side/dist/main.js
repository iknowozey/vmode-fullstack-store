"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const coolieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(coolieParser());
    app.enableCors({
        origin: [process.env.CLIENT_URL],
        credentials: true,
        exposedHeaders: 'set-cookie'
    });
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map