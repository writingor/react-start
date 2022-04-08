import React, { useEffect, useState } from 'react';
import MainButton from '../components/UI/button/MainButton';
import MainModal from '../components/UI/modal/MainModal';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import PostFilter from '../components/PostFilter';

import '../styles/App.css';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import MainLoader from '../components/UI/loader/MainLoader';
import { useFetching } from '../hooks/useFetching';
import { getPagesCount } from '../utils/pages';
import MainPagination from '../components/UI/pagination/MainPagination';


function Posts() {

    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    });

    useEffect(() => {
        fetchPosts(limit, page);
    }, []);


    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    }

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

            {postError &&
                <div>Error: {postError}</div>
            }

            {isPostsLoading
                ? <MainLoader></MainLoader>
                : <PostList remove={removePost} posts={searchedAndSortedPosts} title={'Post list 1'} />
            }

            <MainPagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />

        </div>
    );
}

export default Posts;
