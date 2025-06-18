import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private jwt;
    private userService;
    private prisma;
    private configService;
    EXPIRE_DAY_REFRESH_TOKEN: number;
    REFRESH_TOKEN_COOKIE_NAME: string;
    constructor(jwt: JwtService, userService: UserService, prisma: PrismaService, configService: ConfigService);
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
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
        };
    }>;
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            name: string;
            email: string;
            password: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            picture: string;
        };
    }>;
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
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
        };
    }>;
    issueTokens(userId: string): {
        accessToken: string;
        refreshToken: string;
    };
    private validateUser;
    validateOAuthLogin(req: any): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
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
        };
    }>;
    addRefreshTokenToResponse(res: Response, refreshToken: string): void;
    RemoveRefreshTokenToResponse(res: Response): void;
}
