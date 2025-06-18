import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userService;
    constructor(configService: ConfigService, userService: UserService);
    validate({ id }: {
        id: string;
    }): Promise<({
        favorites: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            price: number;
            images: string[];
            categoryId: string | null;
            colorId: string | null;
            userId: string | null;
        }[];
        orders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            status: import("generated/prisma").$Enums.EnumOrderStatus;
            total: number;
        }[];
    } & {
        name: string;
        email: string;
        password: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        picture: string;
    }) | null>;
}
export {};
