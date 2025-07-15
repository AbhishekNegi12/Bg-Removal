import express from 'express'
import { clerkWebhooks, paymentRazorpay, userCredits, verifyRazorpay } from '../controllers/userController.js'
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

userRouter.post('/pay-razor',authUser,paymentRazorpay)
userRouter.post('/verify-razor',verifyRazorpay)

export default userRouter
