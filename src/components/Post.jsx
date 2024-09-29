import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

function Post({ post, userId }) {
  const { deletePost } = useContext(PostList);

  return (
    <div
      className="card post-card cardD elem-1"
      style={{ width: "25rem", height: "100%" }}
    >
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <a key={tag} href="#" className="btn btn-primary hashtag">
            {tag}
          </a>
        ))}
        <div className="alert alert-success reactions" role="alert">
          special date/days before of my life {post.reactions.likes}.
        </div>
      </div>
    </div>
  );
}
export default Post;
