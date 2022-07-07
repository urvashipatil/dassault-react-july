import Post from "./post";

export default function PostList({ posts, isLoading }) {
  return (
    <ul className="posts">
      {isLoading && <div>Loading...Please wait</div>}
      {!isLoading && posts.length == 0 && <div>No Posts found</div>}
      {posts.map((item) => {
        return (
          <Post
            key={item.id}
            post={item} // onDeletePost={onDeletePost}
          />
        );
      })}
    </ul>
  );
}
