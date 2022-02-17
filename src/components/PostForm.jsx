import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { v4 as uuidv4 } from 'uuid';

function PostForm({create}) {
  const [post, setPost] = useState({ title: '', body: '' });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = { ...post, id: uuidv4() };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <div>
      <form>
        <MyInput
          value={post.title}
          onChange={(ev) => setPost({ ...post, title: ev.target.value })}
          type="text"
          placeholder="name post" />
        <MyInput
          value={post.body}
          onChange={(ev) => setPost({ ...post, body: ev.target.value })}
          type="text"
          placeholder=" describe post" />
        <MyButton onClick={addNewPost}>input post</MyButton>
      </form>
    </div>
  )
}

export default PostForm;
