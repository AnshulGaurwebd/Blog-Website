import { useContext, useState } from "react";
import { MdDelete, MdThumbUp, MdThumbDown, MdMargin } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { useAuth0 } from "@auth0/auth0-react";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  const [likes, setLikes] = useState(post.reactions?.likes ?? 0);
  const { user } = useAuth0();

  const handleDelete = () => {
    if (!user) {
      alert("You must be logged in to delete a post.");
      return;
    }
    if (user.name !== post.userId) {
      alert("You can't delete others' posts.");
      return;
    }

    deletePost(post._id); // Pass user name as argument
  };

  // Function to handle Like
  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
    updateLikes(post._id, likes + 1);
  };

  // Function to handle Dislike
  const handleDislike = () => {
    if (likes > 0) {
      setLikes((prevLikes) => prevLikes - 1);
      updateLikes(post._id, likes - 1);
    }
  };

  // Function to send updated likes to backend
  const updateLikes = (postId, newLikes) => {
    fetch(`https://blog-website-scrk.onrender.com/update-likes/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: newLikes }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Updated Likes:", data))
      .catch((err) => console.error("Error updating likes:", err));
  };

  return (
    <div
      className="card post-card cardD elem-1"
      style={{ width: "25rem", height: "100%" }}
    >
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          {user && user.name === post.userId && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={handleDelete}
              style={{ cursor: "pointer" }}
            >
              <MdDelete />
              <span className="visually-hidden">Delete</span>
            </span>
          )}
        </h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <a
            key={tag}
            href="#"
            className="btn btn-primary hashtag"
            style={{ margin: "3px" }}
          >
            {tag}
          </a>
        ))}

        {/* Display Date */}
        <div
          className="alert alert-info"
          role="alert"
          style={{ margin: "5px" }}
        >
          📅 Special Date: <strong>{post.date}</strong>
        </div>

        {/* Like & Dislike Buttons */}
        <div className="d-flex justify-content-around mt-3">
          <button onClick={handleLike} className="btn btn-success">
            <MdThumbUp /> Like ({likes})
          </button>
          <button onClick={handleDislike} className="btn btn-danger">
            <MdThumbDown /> Dislike
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
