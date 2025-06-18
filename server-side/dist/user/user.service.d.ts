import { PrismaService } from 'src/prisma.service';
import { AuthDto } from 'src/auth/dto/auth.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getById(id: string): Promise<({
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
    getByEmail(email: string): Promise<({
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
    create(dto: AuthDto): Promise<{
        name: string;
        email: string;
        password: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        picture: string;
    }>;
}
