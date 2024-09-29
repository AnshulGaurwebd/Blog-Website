import { useContext } from "react";
import Post from "./Post";
import { PostList as Data } from "../store/post-list-store";
import Welcome from "./Welcome";
import Loading from "./Loading";

function PostList() {
  const { postList, fetching } = useContext(Data);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <Welcome />}
      <div className="postlist">
        {!fetching &&
          postList.map((post) => (
            <Post key={post.id} post={post} userId={post.id} />
          ))}
      </div>
    </>
  );
}

export default PostList;
