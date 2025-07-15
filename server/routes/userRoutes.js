import express from 'express'
import { clerkWebhooks, userCredits } from '../controllers/userController.js'
import authUser from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/webhooks',clerkWebhooks);

// Use raw body parser for Clerk webhooks
// userRouter.post(
//   '/webhooks',
//   express.raw({ type: 'application/json' }),
//   clerkWebhooks
// );
// API
userRouter.get('/credits',authUser,userCredits)


export default userRouter
