import express from "express";
import * as authController from '../controllers/authentication/dashboardController.js';
import {authLocal} from '../services/authService.js';

const router = express.Router();

router 
    .post("/signup", authController.signUp)
    .post("/login", authController.login)

export default router;