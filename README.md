# EraseBg

EraseBg is a full-stack SaaS application for AI-powered background removal from images. It uses the ClipDrop API for background removal. The project features user authentication, credit-based usage, payment integration, and a modern React frontend. Below is a detailed overview of the project, its architecture, and all technologies used.

---


- [Live Preview](#live-preview)
- [Demo Video](#demo-video)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Frontend](#frontend)
- [Backend](#backend)
- [Authentication & User Management](#authentication--user-management)
- [Credits System](#credits-system)
- [Image Upload & Background Removal](#image-upload--background-removal)
- [Payments (Razorpay)](#payments-razorpay)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [How to Run Locally](#how-to-run-locally)
- [Environment Variables](#environment-variables)
- [License](#license)
---


---

## Live Preview

[Live Preview](https://bg-removal-iota-one.vercel.app)


---

## Demo Video

```
![Demo Video](screenshots/demo.gif)
```

---

## Screenshots

```
![Dashboard](screenshots/dashboard.png)
![Upload](screenshots/upload.png)
![Result](screenshots/result.png)
```

---

## Features
- AI-powered background removal for images 
- User authentication via Clerk
- Credit-based usage system
- Buy credits using Razorpay payments
- Modern, responsive React UI
- Toast notifications for user feedback
- Secure backend with Express, JWT, and MongoDB

---

## Tech Stack
### Frontend
- **React**: UI library for building interactive interfaces
- **Vite**: Fast build tool for React
- **React Router**: Client-side routing
- **React Toastify**: Toast notifications
- **Axios**: HTTP client for API requests
- **Clerk**: Authentication and user management
- **Tailwind CSS**: Utility-first CSS framework

### Backend
- **Node.js & Express**: Server and API framework
- **MongoDB & Mongoose**: Database and ODM
- **JWT**: Authentication tokens
- **SVIX**: Webhook handling for Clerk events
- **Multer**: File upload middleware
- **Form-Data**: Handling multipart form data
- **Razorpay**: Payment gateway integration
- **CORS**: Cross-origin resource sharing

---

## Frontend
- Located in the `client/` folder
- Built with React and Vite for fast development
- Uses Clerk for authentication and user context
- Features:
  - Upload images for background removal
  - View and buy credits
  - Responsive dashboard and result pages
  - Toast notifications for feedback
- Key files:
  - `src/pages/BuyCredit.jsx`: Payment and credit purchase UI
  - `src/pages/Result.jsx`: Shows original and processed images
  - `src/components/Upload.jsx`: Handles image upload
  - `src/context/AppContext.jsx`: Global state management

---

## Backend
- Located in the `server/` folder
- Built with Express.js
- Connects to MongoDB using Mongoose
- Handles authentication via JWT and Clerk webhooks
- Key files:
  - `server.js`: Entry point
  - `controllers/userController.js`: User, credits, and payment logic
  - `controllers/imageController.js`: Image upload and background removal
  - `middlewares/auth.js`: JWT authentication middleware
  - `middlewares/multer.js`: Handles file uploads
  - `models/userModel.js`: User schema
  - `models/transactionalModel.js`: Transaction schema
  - `routes/userRoutes.js`: User-related API routes
  - `routes/imageRoutes.js`: Image-related API routes

---

## Authentication & User Management
- **Clerk** is used for user sign-up, login, and session management
- Clerk webhooks (handled by SVIX) sync user data to MongoDB
- JWT tokens are used for API authentication
- Middleware (`auth.js`) decodes JWT and attaches `clerkId` to requests

---

## Credits System
- Each user has a `creditBalance` in MongoDB
- Credits are deducted on each image processed
- Users can buy credits via Razorpay
- Credits are updated after successful payment and webhook verification

---

## Image Upload & Background Removal
- **Multer** handles image uploads from the frontend
- Images are sent to the backend as multipart form data
- **Form-Data** is used to send images to the [ClipDrop API](https://clipdrop.co/) for AI-powered background removal
- The processed image is returned as a base64 string and shown in the UI
- Credits are deducted after successful processing

---

## Payments (Razorpay)
- Users can buy credits using Razorpay
- Payment flow:
  1. User selects a plan and initiates payment
  2. Backend creates a Razorpay order
  3. Frontend opens Razorpay checkout
  4. On payment success, backend verifies and updates credits
- All payment transactions are stored in MongoDB

---

## API Endpoints
### User
- `POST /api/user/webhooks`: Clerk webhook for user sync
- `GET /api/user/credits`: Get user credits (JWT required)
- `POST /api/user/pay-razor`: Create Razorpay order (JWT required)
- `POST /api/user/verify-razor`: Verify payment and update credits

### Image
- `POST /api/image/remove-bg`: Upload image and remove background (JWT required)

---

## Project Structure
```
client/
  src/
    components/
    context/
    pages/
    assets/
server/
  controllers/
  middlewares/
  models/
  routes/
  configs/
```

---

## How to Run Locally
1. Clone the repository
2. Install dependencies in both `client/` and `server/` folders:
   ```sh
   cd client && npm install
   cd ../server && npm install
   ```
3. Set up your `.env` files in both folders (see below)
4. Start the backend:
   ```sh
   npm run dev
   ```
5. Start the frontend:
   ```sh
   npm run dev
   ```
6. Access the app at `http://localhost:5173`

---

## Environment Variables
### Server `.env`
```
MONGODB_URI=your_mongodb_connection_string
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
CLIPDROP_API=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CURRENCY=INR
```
### Client `.env`
```
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

---

## License
This project is licensed under the MIT License.

---

## Credits
Developed by Abhishek Negi and contributors.
