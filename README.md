# Hamro Bazzar – Backend API

This is the **backend REST API** for **Hamro Bazzar**, an eCommerce platform.  
It handles product management, category-based APIs, orders, payments, and secure server-side logic.


## 🚀 Features

- 🛒 Product APIs (Electronics, Gaming, Home Furniture, Personal Care)
- ⭐ Featured & Offered products
- 🗂️ Category-based product filtering
- 📦 Order & payment APIs
- 🔐 Security best practices:
  - Helmet (security headers)
  - CORS protection
  - Rate limiting
- 📊 Request logging with Morgan
- 🧩 Modular route structure
- 🔌 MongoDB integration

---

## 🧑‍💻 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **dotenv**
- **helmet**
- **cors**
- **express-rate-limit**
- **morgan**

---

## 📁 Project Structure

backend/
├── routes/
│ ├── electronics.routes.js
│ ├── gaming.routes.js
│ ├── homeFurniture.routes.js
│ ├── personalCare.routes.js
│ ├── featuredProducts.routes.js
│ ├── offeredProducts.routes.js
│ ├── allProducts.routes.js
│ ├── payments-routes/
│ │ └── order.routes.js
│ └── category-products-routes/
│ ├── electronics.routes.js
│ ├── gaming.routes.js
│ ├── homeFurniture.routes.js
│ └── personalCare.routes.js
├── models/
├── controllers/
├── server.js
├── .env.development
├── .env.production
└── README.md


## ⚙️ Environment Variables

### `.env.development`
PORT=5000
MONGO_URI=mongodb://localhost:27017/hamro-bazzar
FRONTEND_URL=http://localhost:5173
.env.production
PORT=5000
MONGO_URI=your_production_mongodb_uri
FRONTEND_URL=https://hamro-bazzar-six.vercel.app
⚠️ Never commit .env files to GitHub.

🛠️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/hamro-bazzar-backend.git
2️⃣ Install dependencies
npm install
3️⃣ Run in development
npm run dev
4️⃣ Run in production
npm start
🔐 Security & Performance
CORS restricted to frontend domain

Rate limiting: 800 requests / 15 minutes per IP

Helmet for secure HTTP headers

Graceful shutdown for server & database

🧪 API Test Route
http
Copy code
GET /
Response:
"✅ Server is running!"
🔄 Deployment Notes (IMPORTANT)
✅ Professional approach for env handling
import dotenv from "dotenv";
dotenv.config(); // DO NOT hardcode env file in production
Local → .env.development

Production → platform env variables (Vercel / Railway / Render)

❌ Do NOT do this in production:
dotenv.config({ path: "./.env.development" });
📈 Future Improvements
Authentication & authorization (JWT)

Admin dashboard APIs

Order history & tracking

Webhooks for payment gateways

Redis caching

👨‍💻 Author
Bibas Yonghang
MERN Stack Developer

📄 License
This project is not under any license yet.