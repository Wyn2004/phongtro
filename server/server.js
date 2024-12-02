import express from 'express';
require('dotenv').config();
// Lay bien o file .env
import cors from 'cors';
import initRoutes from './src/routes';
import connectDB from './src/config/connectDB';

// tao con server
const app = express();
app.use(
  cors({
    // cau hinh nhung nguoi co the truy cap vao du lieu
    origin: process.env.CLIENT_URL,
    // cai dat nhung method co quyen truy cap
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
);

// cho phep doc cac du lieu duoc gui len duoi dang json
app.use(express.json());

// cho phep doc cac du lieu duoc gui len duoi dang form data
app.use(express.urlencoded({ extended: true }));

// test server
initRoutes(app);
// test connect DB
connectDB();

const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
  console.log(`Server is running on port ${listener.address().port}`);
});
