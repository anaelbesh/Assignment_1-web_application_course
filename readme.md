# Assignment 1 - Web Application Course

A RESTful API server built with Node.js, Express, and MongoDB for managing posts and comments.

## 👥 Authors
- **Anael Ben Shabat**
- **Ofir Shviro**

## 📖 Project Description

This project implements a RESTful API server that manages posts and comments with full CRUD operations. The application is built using the MVC (Model-View-Controller) architecture pattern and provides endpoints for creating, reading, updating, and deleting posts and comments.

### Features
- **Posts Management**: Create, read, update, and filter posts
- **Comments System**: Add comments to posts with full CRUD operations
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **RESTful Architecture**: Clean and intuitive API endpoints
- **Query Parameters**: Filter posts by sender and comments by post ID

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js v5.1.0**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose v9.0.0**: MongoDB object modeling
- **dotenv v17.2.3**: Environment variable management
- **Nodemon v3.1.11**: Development auto-reload (dev dependency)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local installation)
- npm (comes with Node.js)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/anaelbesh/Assignment_1-web_application_course.git
cd Assignment_1-web_application_course
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
DB_URL=mongodb://localhost:27017/your-database-name
```

### 4. Start MongoDB
If using local MongoDB, make sure the MongoDB service is running:
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

### 5. Run the Application

**Development mode:**
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## 📁 Project Structure

```
Assignment_1-web_application_course/
│
├── src/
│   ├── controllers/          # Request handlers
│   │   ├── postController.js
│   │   └── commentController.js
│   │
│   ├── models/               # Database schemas
│   │   ├── postModel.js
│   │   └── commentModel.js
│   │
│   └── routes/               # API routes
│       ├── postRoutes.js
│       └── commentRoute.js
│
├── index.js                  # Application entry point
├── package.json             # Project dependencies
├── request.rest             # API testing examples
├── .env                     # Environment variables (create this)
└── readme.md               # Project documentation
```

## 🔌 API Endpoints

### Posts Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/posts` | Get all posts (optional: filter by sender) | - |
| `GET` | `/posts/:id` | Get a specific post by ID | - |
| `POST` | `/posts` | Create a new post | `{ sender, title, content }` |
| `PUT` | `/posts/:id` | Update a post by ID | `{ title?, content?, sender? }` |

**Query Parameters:**
- `sender` - Filter posts by sender name (e.g., `/posts?sender=John`)

### Comments Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/comments` | Get all comments (optional: filter by postId) | - |
| `GET` | `/comments/:id` | Get a specific comment by ID | - |
| `POST` | `/comments/:id` | Add a comment to a post (id = postId) | `{ sender, content }` |
| `PUT` | `/comments/:id` | Update a comment by ID | `{ content?, sender? }` |
| `DELETE` | `/comments/:id` | Delete a comment by ID | - |

**Query Parameters:**
- `postId` - Filter comments by post ID (e.g., `/comments?postId=123abc`)

## 💡 Usage Examples

### Create a New Post
```http
POST http://localhost:3000/posts
Content-Type: application/json

{
  "sender": "John",
  "title": "My First Post",
  "content": "Hello, this is my first post!"
}
```

### Get All Posts by Sender
```http
GET http://localhost:3000/posts?sender=John
```

### Add a Comment to a Post
```http
POST http://localhost:3000/comments/692aaf5e94cee70cd74c7a85
Content-Type: application/json

{
  "sender": "Alice",
  "content": "Great post!"
}
```

### Update a Post
```http
PUT http://localhost:3000/posts/692aaf5e94cee70cd74c7a85
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content here."
}
```

### Get Comments for a Specific Post
```http
GET http://localhost:3000/comments?postId=692aaf5e94cee70cd74c7a85
```

## 🧪 Testing the API

The project includes a `request.rest` file with pre-configured HTTP requests. You can use:
- **VS Code REST Client extension** to run requests directly from the file

## 🗄️ Database Schema

### Post Model
```javascript
{
  sender: String (required),
  title: String (required),
  content: String (required),
  comments: [ObjectId] (references to Comment model)
}
```

### Comment Model
```javascript
{
  postId: ObjectId (required, references Post model),
  sender: String (required),
  content: String (required)
}
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check your `DB_URL` in the `.env` file

### Port Already in Use
- Change the `PORT` value in your `.env` file
- Or stop the process using port 3000:
  ```bash
  # Windows
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  ```

### Module Not Found Errors
- Run `npm install` to ensure all dependencies are installed
- Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

## 📝 Assignment Requirements

This project fulfills Assignment 1 requirements:
- ✅ RESTful API server using Express.js
- ✅ MongoDB database integration with Mongoose
- ✅ MVC architecture pattern
- ✅ CRUD operations for Posts and Comments
- ✅ Query parameters for filtering data
- ✅ Proper error handling and validation
- ✅ Environment variable configuration

## 🔗 Repository

[https://github.com/anaelbesh/Assignment_1-web_application_course](https://github.com/anaelbesh/Assignment_1-web_application_course)

## 📄 License

ISC

---

**Note**: Make sure to create a `.env` file before running the application. Never commit your `.env` file to version control as it contains sensitive information.
