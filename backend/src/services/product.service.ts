import prisma from '../config/db';

export class ProductService {
    async createProduct(data: any, userId: string) {
        return await prisma.product.create({
            data: {
                ...data,
                userId,
            },
        });
    }

    async getAllProducts() {
        return await prisma.product.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
            },
        });
    }

    async getProductById(id: string) {
        const product = await prisma.product.findUnique({
            where: { id },
            include: {
                user: { select: { id: true, email: true } },
            },
        });
        if (!product) throw new Error('Product not found');
        return product;
    }

    async updateProduct(id: string, data: any) {
        // Check existence first
        await this.getProductById(id);
        return await prisma.product.update({
            where: { id },
            data,
        });
    }

    async deleteProduct(id: string) {
        // Check existence first
        await this.getProductById(id);
        return await prisma.product.delete({
            where: { id },
        });
    }
}
