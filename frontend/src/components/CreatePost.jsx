import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { Form, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const { user, isAuthenticated } = useAuth0();

  const navigate = useNavigate();
  const postTitleEl = useRef();
  const bodyEl = useRef();
  const tagsEl = useRef();
  const dateEl = useRef(); // New Date Field

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      alert("You must be logged in to create a post.");
      return;
    }
    const postTitle = postTitleEl.current.value;
    const postBody = bodyEl.current.value;
    const tags = tagsEl.current.value.split(" ");
    const date = dateEl.current.value; // Get the date input

    fetch("https://blog-website-scrk.onrender.com/create-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.name,
        title: postTitle,
        body: postBody,
        tags: tags,
        date: date, // Send date to backend
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <Form method="POST" onSubmit={handleSubmit} className="create-post postba">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          ref={postTitleEl}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          name="body"
          ref={bodyEl}
          rows="5"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Special Date
        </label>
        <input
          type="date"
          name="date"
          ref={dateEl}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags
        </label>
        <input
          type="text"
          name="tags"
          ref={tagsEl}
          className="form-control"
          placeholder="Enter tags separated by spaces"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
}

export default CreatePost;
