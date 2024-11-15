import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import dbConnect from './utils/db.js';
import userRoute from './routes/user.routes.js';
import companyRoute from './routes/company.routes.js';
import jobRoute from './routes/job.routes.js';
import applicationRoute from './routes/application.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Basic route
app.get('/home', (req, res) => {
    return res.status(200).json({
        message: 'I am coming from backend',
        success: true
    });
});

// CORS options
const corsOptions = {
    origin: 'http://localhost:5173', // Adjust based on your frontend URL
    credentials: true
};
app.use(cors(corsOptions));

// Routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/company', companyRoute);
app.use('/api/v1/job', jobRoute);
app.use('/api/v1/application', applicationRoute);

// Export the app for Vercel
export default app;
