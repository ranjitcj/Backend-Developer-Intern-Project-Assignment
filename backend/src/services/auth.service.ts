import prisma from '../config/db';
import { hashPassword, comparePassword } from '../utils/password';
import { generateTokens } from '../utils/jwt';

export class AuthService {
    async register(data: any) {
        const existingUser = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await hashPassword(data.password);
        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                role: data.role || 'USER',
            },
        });

        return generateTokens(user.id, user.role);
    }

    async login(data: any) {
        const user = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (!user || !(await comparePassword(data.password, user.password))) {
            throw new Error('Invalid credentials');
        }

        return generateTokens(user.id, user.role);
    }
}
