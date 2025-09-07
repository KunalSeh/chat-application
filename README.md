

![Demo App](/frontend/public/screenshot-for-readme.png)
# ✨ Full Stack Realtime Chat Application ✨

A modern real-time chat app built with **MERN Stack, Socket.io, TailwindCSS, and DaisyUI**.

---

## 🚀 Features

- 🌟 **Tech Stack**: MERN + Socket.io + TailwindCSS + DaisyUI  
- 🔐 **Authentication & Authorization** with JWT  
- 💬 **Real-time messaging** powered by Socket.io  
- 🟢 **Online user status tracking**  
- 📂 **Profile picture uploads** with Cloudinary   
- ⚡ **Global state management** with Zustand  
- 🛡 **Error handling** on both server & client  
- 📦 **Production-ready deployment** (Render) 

---

## ⚙️ Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/chat-application.git
   cd chat-application

2. Create a .env file in the backend folder
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5001
   JWT_SECRET=your_secret_key

   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   NODE_ENV=development

## 🛠 Build the App
   ```bash
   npm run build
  ```
  This will install dependencies for both backend & frontend and build the React app.
  
## ▶️ Start the App
   ```bash
   npm start
   ```

## Backend runs on http://localhost:5001

## Frontend is served in production mode via Express

## 🌍 Deployment

   Backend + Frontend can be deployed on Render (single service).

