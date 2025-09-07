

![Demo App](/frontend/public/screenshot-for-readme.png)

✨ Full Stack Realtime Chat Application ✨

A modern real-time chat app built with MERN Stack, Socket.io, TailwindCSS, and DaisyUI.

🚀 Features

🌟 Tech Stack: MERN + Socket.io + TailwindCSS + DaisyUI

🔐 Authentication & Authorization with JWT

💬 Real-time messaging powered by Socket.io

🟢 Online user status tracking

📂 Profile picture uploads with Cloudinary (or add your own images manually)

⚡ Global state management with Zustand

🛡 Error handling on both server & client

📦 Production-ready deployment (Render / Vercel / Railway)

⏳ And much more!

⚙️ Setup
1. Clone the repository
git clone https://github.com/your-username/chat-application.git
cd chat-application

2. Create a .env file in the backend folder
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development


👉 If you don’t want to use Cloudinary, you can simply store images locally or update the seed data with your own profile pictures (e.g., place them in a /public/images folder and reference them directly).

🖼 Adding Your Own Profile Pictures

Put your images inside frontend/public/images/ (e.g., frontend/public/images/user1.jpg).

Update your user seed data or profile settings to use:

profilePic: "/images/user1.jpg"


When you build & deploy, these images will be served statically with your app.

If you prefer Cloudinary, just upload your images there and use the provided URLs.

🛠 Build the App
npm run build


This will install dependencies for both backend & frontend and build the React app.

▶️ Start the App
npm start


Backend runs on http://localhost:5001

Frontend is served in production mode via Express

🌍 Deployment

Backend + Frontend can be deployed on Render or Railway (single service).

Alternatively, you can deploy backend on Render and frontend separately on Vercel
