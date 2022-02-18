import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'ES9' },
    { id: 2, title: 'Script', body: 'Description' },
    { id: 3, title: 'C++ ', body: 'Base' },
  ]);

  const [selectSort, setSelectSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPosts(){
    console.log('Worked getSortPosts')
    if(selectSort){
      return [...posts].sort((a, b) => a[selectSort].localeCompare([selectSort]));
    }
    return posts;
  }
  
  const sortedPosts = getSortedPosts();

  function createPost(newPost) {
    setPosts([...posts, newPost])
  };

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  function sortPosts(sort) {
    setSelectSort(sort);
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '20px 0px' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <MySelect
          value={selectSort}
          onChange={sortPosts}
          defaultValue="sort by"
          options={[
            { value: "title", name: "named" },
            { value: "body", name: "describe" }
          ]}
        />
      </div>
      {posts.length === 0
        ?
        <p style={{ textAlign: 'center', fontSize: '2em' }}> All Posts are deleting</p>
        :
        <PostList remove={removePost} posts={sortedPosts} title='Order list 1' />
      }
    </div>
  );
}

export default App;
