import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, title, remove }) {

  if (!posts.length === 0) {
    return (
      <p style={{ textAlign: 'center', fontSize: '2em' }}>
        All Posts are deleting!</p>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) =>
        <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
      )}
    </div>
  )
};

export default PostList;
