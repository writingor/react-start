import React from 'react';

// import '../styles/Post.css';
import MainInput from './UI/input/MainInput';
import MainSelect from './UI/select/MainSelect';

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MainInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search"
            />

            <MainSelect
                value={filter.sort}
                defaultValue="Sort by"
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    { value: 'title', name: 'By title' },
                    { value: 'body', name: 'By body' }
                ]}
            />
        </div>
    );
};

export default PostFilter;