import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as Data } from "../store/post-list-store";
import Welcome from "./Welcome";
import Loading from "./Loading";

function PostList() {
  const { postList, fetching } = useContext(Data);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredPosts = (Array.isArray(postList) ? postList : []).filter(
    (post) =>
      searchQuery.trim() === "" ||
      (post?.title?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
      (post?.body?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
      (post?.date || "").includes(searchQuery)
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search posts..."
        className="form-control mb-3"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />

      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <Welcome />}
      <div className="postlist">
        {!fetching &&
          filteredPosts.map((post) => (
            <Post key={post._id} post={post} userId={post._id} />
          ))}
      </div>
    </>
  );
}

export default PostList;
