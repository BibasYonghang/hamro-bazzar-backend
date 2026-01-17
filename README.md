# 🛒 Hamro Bazzar Backend – Online eCommerce Platform

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
```bash
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
```

## ⚙️ Environment Variables

⚠️ Never commit `.env.development` files to GitHub.
 
---

🛠️ Installation & Setup
 `Clone the repository`
### git clone 

` Install dependencies`
### npm install

`Run in development`
### npm run dev

`Run in production`
### npm start


## 🔐 Security & Performance
- CORS restricted to frontend domain
- Rate limiting: 800 requests / 15 minutes per IP
- Helmet for secure HTTP headers
- Graceful shutdown for server & database


## 📈 Future Improvements
- Authentication & authorization (JWT)
- Admin dashboard APIs
- Order history & tracking
- Webhooks for payment gateways
- Redis caching

## 👨‍💻 Author
 Bibas Yonghang
### MERN Stack Developer

## 📄 License
This project is not under any license yet.

---