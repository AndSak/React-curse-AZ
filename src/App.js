import React, { useState, useMemo } from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'ES9' },
    { id: 2, title: 'Script', body: 'Description' },
    { id: 3, title: 'C++ ', body: 'Base' },
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    console.log('Worked getSortPosts');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;

  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])


  function createPost(newPost) {
    setPosts([...posts, newPost])
  };

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '20px 0px' }} />

      <PostFilter 
        filter={filter}
        setFilter={setFilter}
        />
      {sortedAndSearchedPosts.length === 0
        ?
        <p style={{ textAlign: 'center', fontSize: '2em' }}> All Posts are deleting</p>
        :
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Order list 1' />
      }
    </div>
  );
}

export default App;
