import React, { useMemo, useState } from 'react';
import MainButton from './components/UI/button/MainButton';
import MainModal from './components/UI/modal/MainModal';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';

import './styles/App.css';


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'This is a lang...' },
    { id: 2, title: 'qavasdfScript', body: 'This is a ddddddddddlang...' },
    { id: 3, title: 'JavfsdddddddddddddddaScript', body: 'T1111111his is a lang...' },
  ]);

  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()));
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">

      <MainButton onClick={() => setModal(true)}>
        Create post
      </MainButton>

      <MainModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MainModal>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList remove={removePost} posts={searchedAndSortedPosts} title={'Post list 1'} />

    </div>
  );
}

export default App;
