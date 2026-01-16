import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import productRoutes from './routes/product.routes';
import { setupSwagger } from './config/swagger';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);

app.get('/', (req, res) => {
    res.send('API is running');
});

const swaggerPort = process.env.PORT ?? 5000;
setupSwagger(app, swaggerPort);

export default app;
