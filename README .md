# QuirkSphere

It's a backend for a blogging platform where users can write, update, and delete their blogs. The system will have two roles: Admin and User. The Admin has special permissions to manage users and their blogs, while users can perform CRUD operations on their own blogs. The backend will include secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.

**Live Server Link:**

**Explanation video:**

### Key Features

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

### Techonology used
 1. Backend : Node.js, Express.js, TypeScript, Zod
 2. DataBase: MongoDB and Mongoose
 3. Tools: EsLint,Prettieer