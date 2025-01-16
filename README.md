# QuirkSphere

It's a backend for a blogging platform where users can write, update, and delete their blogs. The system will have two roles: Admin and User. The Admin has special permissions to manage users and their blogs, while users can perform CRUD operations on their own blogs. The backend will include secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.

**Live Server Link:** https://quirksphere.vercel.app/

**Explanation video:**

**Admin login credentials:** <br>
Email: Shahin123@gmail.com <br>
Password: Shahin123

## Key Features

- **Authentication:**
  - Secure login system for all users.
  - Only logged-in users can perform write, update, and delete operations.
- **Authorization:**
  - Differentiation between Admin and User roles with distinct permissions.
  - Authorization mechanisms ensure users can only modify their own content, while admins have broader access.
- **Admin:**
  - Can delete any blog.
  - Can block users by setting the isBlocked property in their profile.
  - Cannot update any blog to maintain content authenticity.
- **User:**
  - Can register and log in to access their account.
  - Can create, update, and delete only their own blogs when logged in.
  - Cannot perform admin actions, ensuring role-specific restrictions.
- **Security:**
  - Role-based access control ensures actions are restricted to authorized users.
  - Sensitive data (e.g., passwords) is securely stored with encryption.
  - Validation checks prevent unauthorized or malicious actions.

## Technology used
 1. Backend: Node.js, Express.js, TypeScript, Zod
 2. DataBase: MongoDB and Mongoose
 3. Tools: EsLint,Prettieer

## Check API Endpoint

### Authentication

**Register User: (POST)**
` /api/auth/register ` <br>
**Request Body:**
```
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Login User: (POST)**
` /api/auth/login ` <br>
**Request Body:**
```
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

### Blog Management

**Create Blog: (POST)**
` /api/blogs ` <br>
**Request Body:**
```
{
  "title": "My First Blog",
  "content": "This is the content of my blog."
}
```

**Update Blog: (PATCH)**
` /api/blogs/:id ` <br>
**Request Body:** 
```
{
  "title": "Updated Blog Title",
  "content": "Updated content."
}
```

**Delete Blog: (DELETE)**
` /api/blogs/:id `

**Get All Blogs: (GET)**
` /api/blogs/:id `
Query Parameters Example: ` /api/blogs?search=technology&sortBy=createdAt&sortOrder=desc&filter=60b8f42f9c2a3c9b7cbd4f18 `

### Admin Actions

**Block User: (PATCH)**
` /api/admin/users/:userId/block `

**Delete Blog: (POST)**
` /api/admin/blogs/:id `

## Project Set-Up Instructions 

#### 1. Clone the Repository
```
https://github.com/shahinexy/QuirkSphere.git
```

#### 2.  Install Dependencies
```
npm install 
```
#### 3. Set up Environment variables create an .env file in the root directory and include the following
```
NODE_ENV= development
PORT=3000
DATABASE_URL=mongodb://localhost:27017
BCRYPT_SALT_ROUND=10
JWT_ACCESS_SECRET=d2831ef014e61bc2b2dff99......
JWT_REFRESH_SECRET=2fd0502b8531b16f74be87......
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=365d
```
#### 4. Run the server in development mode
```
npm run dev 
```

