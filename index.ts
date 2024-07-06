import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './src/config/database.conf';

dbConnection()
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());



// Use the routes
// app.use('/', routes);

// Global error handler for not found route
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found');
    res.status(404).json({ message: error.message });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
