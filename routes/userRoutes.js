import express from 'express';
import { register } from '../controllers/userController.js';

const router = express.Router();



router.get("/user/register",register);
export default router;