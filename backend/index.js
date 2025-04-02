const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./backend/.env" });

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Ensures form-data is parsed
const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, "/frontend/dist")));

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("Error: MONGO_URI is not defined. Check your .env file.");
  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Define Schema
const PostSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: { type: [String], default: [] },
  date: { type: String, required: true },
});

const Post = mongoose.model("Post", PostSchema);

// Routes

// Create a new post
app.post("/create-post", async (req, res) => {
  try {
    const { userId, title, body, date, tags } = req.body;

    // Validate required fields
    if (!userId || !title || !body) {
      return res
        .status(400)
        .json({ message: "userId, title, and body are required" });
    }

    const newPost = new Post({
      userId,
      title,
      body,
      tags: tags || [],
      date: date || new Date().toISOString().split("T")[0],
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all posts
// Get all posts - Change from "/" to "/api/posts"
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({ message: "Success", data: posts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a post by ID
app.delete("/delete-post/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
