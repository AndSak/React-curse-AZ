import React, { useRef, useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter'
import PostItem from './components/PostItem'
import MyButton from './components/UI/button/MyButton';
import PostList from './components/PostList';
import './styles/App.css';
import MyInput from './components/UI/input/MyInput';



function App() {
  const [value, setValue] = useState('word');

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    }
    setPosts([...posts, newPost]);
    setBody('');
    setTitle('');
  }

  return (
    <div className='App'>
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          type="text"
          placeholder="name post" />
        <MyInput
          value={body}
          onChange={(ev) => setBody(ev.target.value)}
          type="text"
          placeholder=" describe post" />
        <MyButton onClick={addNewPost}>input post</MyButton>
      </form>

      <PostList posts={posts} title='Order list 1' />

      < Counter />
      < ClassCounter />
      <h2> {value} </h2>
      <input
        type="input name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default App;
