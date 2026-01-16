import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';
import { productSchema, updateProductSchema } from '../utils/validation';
import { AuthRequest } from '../middleware/auth.middleware';

const productService = new ProductService();

export const createProduct = async (req: AuthRequest, res: Response) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const product = await productService.createProduct(req.body, req.user!.userId);
        res.status(201).json(product);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await productService.getProductById(req.params.id as string);
        res.status(200).json(product);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { error } = updateProductSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const product = await productService.updateProduct(req.params.id as string, req.body);
        res.status(200).json(product);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        await productService.deleteProduct(req.params.id as string);
        res.status(204).send();
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
