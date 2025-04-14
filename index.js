import express from 'express'
import detenv from 'dotenv'
import { connectDB } from './Database/db.js';

detenv.config();

const app = express()


const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!')
}); 

// importing routes
import userRoutes from './routes/userRoutes.js';

//using routes
app.use("/api", userRoutes);



app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');

    connectDB();
});