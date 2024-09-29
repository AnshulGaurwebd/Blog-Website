import { useContext, useRef, useState } from "react";
import { PostList } from "../store/post-list-store";
import { Form, useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const navigate = useNavigate();
  const userIdEl = useRef();
  const postTitleEl = useRef();
  const bodyEl = useRef();
  const reactEl = useRef();
  const tagsEl = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdEl.current.value;
    const postTitle = postTitleEl.current.value;
    const postBody = bodyEl.current.value;
    const reactions = reactEl.current.value;
    const tags = tagsEl.current.value.split(" ");

    userIdEl.current.value = "";
    postTitleEl.current.value = "";
    bodyEl.current.value = "";
    reactEl.current.value = "";
    tagsEl.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: {
          likes: reactions,
        },
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
  };

  return (
    <Form method="POST" onSubmit={handleSubmit} className="create-post postba">
      <div className="mb-3 ">
        <label htmlFor="userId" className="form-label">
          Enter post number
        </label>
        <input
          type="text"
          name="userId"
          ref={userIdEl}
          className="form-control"
          id="userId"
          placeholder="Number of posts should be between 0 to 200"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          ref={postTitleEl}
          className="form-control"
          id="title"
          placeholder="Adventures of Jaipur"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          name="body"
          ref={bodyEl}
          rows="5"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Enter post related date
        </label>
        <input
          type="text"
          name="reactions"
          ref={reactEl}
          className="form-control"
          id="reactions"
          placeholder="I visited this placce at that date"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          name="tags"
          ref={tagsEl}
          className="form-control"
          id="tags"
          placeholder="please enter tags using space"
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
