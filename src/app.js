import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import './database';

import userRoutes from './routes/User/user_routes';
import jwtRoutes from './routes/User/jwt_routes';
import newsletterRoutes from './routes/Newsletter/newsletter_routes';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/users/', userRoutes);
    this.app.use('/jwt/', jwtRoutes);
    this.app.use('/newsletters/', newsletterRoutes);
  }
}

export default new App().app;
