import React from "react";
import { TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";
import { CSSTransition } from "react-transition-group";

function PostList({ posts, title, remove }) {

  if (!posts.length) {
    return (
      <p style={{ textAlign: 'center', fontSize: '2em' }}>
        All Posts are deleting!</p>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={300}
            classNames="post"
          >
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
};

export default PostList;
