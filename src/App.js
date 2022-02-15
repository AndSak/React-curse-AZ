import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter'
import PostItem from './components/PostItem'


import './styles/App.css';
import PostList from './components/PostList';

function App() {
  const [value, setValue] = useState('word');

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Java 11', body: 'Desc' },
    { id: 2, title: 'Java 22', body: 'Desc' },
    { id: 3, title: 'Java 33', body: 'Desc' },
  ]);

  return (
    <div className='App'>
      <PostList posts={posts} title='Order list 1' />
      <PostList posts={posts2} title='Order list 2' />

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
