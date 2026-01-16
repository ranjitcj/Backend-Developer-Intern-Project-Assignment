import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { registerSchema, loginSchema } from '../utils/validation';

const authService = new AuthService();

export const register = async (req: Request, res: Response) => {
    try {
        const { error } = registerSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const tokens = await authService.register(req.body);
        res.status(201).json(tokens);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { error } = loginSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const tokens = await authService.login(req.body);
        res.status(200).json(tokens);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
