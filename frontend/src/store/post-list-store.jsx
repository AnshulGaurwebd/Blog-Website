import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

const postListReducer = (current, action) => {
  let newPostList = current;
  if (action.type === "DELETE_POST") {
    newPostList = current.filter((post) => post._id !== action.payload.postId); // Use _id instead of id (MongoDB uses _id)
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...current];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload;
  }
  return newPostList;
};

function PostListProvider({ children }) {
  const [postList, dispatchPost] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPost({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPost = (posts) => {
    dispatchPost({
      type: "ADD_INITIAL_POSTS",
      payload: posts, // Fix: Use posts directly
    });
  };

  const deletePost = (postId) => {
    fetch(`http://localhost:5000/delete-post/${postId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete post");
        }
        return res.json();
      })
      .then(() => {
        dispatchPost({
          type: "DELETE_POST",
          payload: {
            postId,
          },
        });
      })
      .catch((err) => console.error("Error deleting post:", err));
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:5000/", { signal }) // Make sure your backend is running
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched posts:", data); // Debugging
        addInitialPost(data); // Fix: Use data instead of data.posts
        setFetching(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{
        postList,
        fetching,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
}

export default PostListProvider;
