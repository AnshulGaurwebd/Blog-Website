import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});
const postListReducer = (current, action) => {
  let newPostList = current;
  if (action.type === "Delete") {
    newPostList = current.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...current];
  } else if (action.type === "ADD_Initial_POSTS") {
    newPostList = action.payload.posts;
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
      type: "ADD_Initial_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPost({
      type: "Delete",
      payload: {
        postId,
      },
    });
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
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
