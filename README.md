# E-Commerce Web Application Backend

A robust Node.js backend API for an e-commerce web application built with Express.js, MongoDB, and JWT authentication.

## 🚀 Features

### Authentication & Authorization
- User registration and login
- JWT-based authentication
- Role-based access control (Admin/General users)
- Secure password hashing with bcryptjs
- Cookie-based token management

### User Management
- User profile management
- Admin panel for user management
- User details retrieval
- User logout functionality

### Product Management
- Product upload (Admin only)
- Product listing and retrieval
- Product updates (Admin only)
- Category-wise product filtering
- Product search functionality
- Product details view

### Shopping Cart
- Add products to cart
- View cart items
- Update cart quantities
- Remove items from cart
- Cart item counting

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Environment Variables**: dotenv
- **CORS**: Cross-Origin Resource Sharing enabled
- **Testing**: Jest

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local instance or MongoDB Atlas)
- npm or yarn package manager

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-app-web-application-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   TOKEN_SECRET_KEY=your-jwt-secret-key
   FRONTEND_URL=http://localhost:3000
   PORT=8080
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Start the production server**
   ```bash
   npm start
   ```

## 📊 Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique, required),
  password: String,
  profilePic: String,
  role: String (ADMIN/GENERAL),
  timestamps: true
}
```

### Product Model
```javascript
{
  productName: String,
  brandName: String,
  category: String,
  productImage: Array,
  description: String,
  price: Number,
  sellingPrice: Number,
  timestamps: true
}
```

### Cart Model
```javascript
{
  productId: String (ref: product),
  quantity: Number,
  userId: String,
  timestamps: true
}
```

## 🔌 API Endpoints

### Authentication
- `POST /api/signup` - User registration
- `POST /api/signin` - User login
- `GET /api/userLogout` - User logout
- `GET /api/user-details` - Get user details (Protected)

### Admin Panel
- `GET /api/all-user` - Get all users (Admin only)
- `POST /api/update-user` - Update user details (Admin only)

### Products
- `POST /api/upload-product` - Upload new product (Admin only)
- `GET /api/get-product` - Get all products
- `POST /api/update-product` - Update product (Admin only)
- `GET /api/get-categoryProduct` - Get product categories
- `POST /api/category-product` - Get products by category
- `POST /api/product-details` - Get product details
- `GET /api/search` - Search products
- `POST /api/filter-product` - Filter products

### Shopping Cart
- `POST /api/addtocart` - Add item to cart (Protected)
- `GET /api/countAddToCartProduct` - Get cart items count (Protected)
- `GET /api/view-card-product` - View cart items (Protected)
- `POST /api/update-cart-product` - Update cart item quantity (Protected)
- `POST /api/delete-cart-product` - Remove item from cart (Protected)

## 🧪 Testing

Run the test suite using Jest:

```bash
npm test
```

## 📁 Project Structure

```
├── config/
│   └── db.js                 # Database connection
├── controller/
│   ├── product/              # Product-related controllers
│   └── user/                 # User-related controllers
├── helpers/
│   └── permission.js         # Permission helper functions
├── middleware/
│   └── authToken.js          # JWT authentication middleware
├── models/
│   ├── cartProduct.js        # Cart model
│   ├── productModel.js       # Product model
│   └── userModel.js          # User model
├── routes/
│   └── index.js              # API routes definition
├── index.js                  # Application entry point
└── package.json              # Project dependencies
```

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcryptjs
- CORS configuration
- Role-based authorization
- HTTP-only cookies for token storage

## 🌟 Development

### Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests

### Code Style

The project follows standard JavaScript conventions with:
- Async/await for asynchronous operations
- Error handling with try-catch blocks
- Consistent response format for all API endpoints

---

**Note**: Make sure to configure your environment variables properly before running the application in production.