import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
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
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string | null;
            name: string;
            picture: string;
        };
    }>;
    register(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string | null;
            name: string;
            picture: string;
        };
    }>;
    getNewTokens(req: Request, res: Response): Promise<{
        accessToken: string;
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
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string | null;
            name: string;
            picture: string;
        };
    }>;
    logout(res: Response): Promise<boolean>;
    googleAuth(req: any): Promise<void>;
    googleAuthCallback(req: any, res: Response): Promise<void>;
    yandexAuth(req: any): Promise<void>;
    yandexAuthCallback(req: any, res: Response): Promise<void>;
}
