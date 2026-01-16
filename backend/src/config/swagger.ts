import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import path from 'path';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Full Stack API',
            version: '1.0.0',
            description: 'API Documentation for Full Stack Application',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: [
        path.resolve(__dirname, '../routes/*.{ts,js}'),
        path.resolve(__dirname, '../controllers/*.{ts,js}')
    ],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express, port: number | string) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
};
