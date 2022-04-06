import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

import './styles/App.css';


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'This is a lang...' },
    { id: 2, title: 'JavasdfScript', body: 'This is a ddddddddddlang...' },
    { id: 3, title: 'JavfsdddddddddddddddaScript', body: 'T1111111his is a lang...' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App"> 

      <PostForm create={createPost}/>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title={'Post list 1'} />
        : <div>No posts...</div>
      }

    </div>
  );
}

export default App;
