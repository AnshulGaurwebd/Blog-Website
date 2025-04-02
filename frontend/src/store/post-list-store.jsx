import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

const postListReducer = (current, action) => {
  if (!Array.isArray(current)) {
    current = []; // Ensure it's an array
  }
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
    fetch(`https://blog-website-scrk.onrender.com/delete-post/${postId}`, {
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
    console.log(
      "Fetching from:",
      "https://blog-website-scrk.onrender.com/api/posts"
    );

    fetch("https://blog-website-scrk.onrender.com/api/posts", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched posts:", data);

        // Extract posts array correctly
        const postsArray = Array.isArray(data.data) ? data.data : [];

        if (postsArray.length > 0) {
          addInitialPost(postsArray);
        } else {
          console.error("Invalid data format:", data);
        }

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
