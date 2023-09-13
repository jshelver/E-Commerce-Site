import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Products from './routes/api/Products';
import Users from './routes/api/Users';

// Load .env file
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Connect to cloud MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'ecommerce'
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err));

// Add routes
app.use('/api/products/', Products);
app.use('/api/users/', Users);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});