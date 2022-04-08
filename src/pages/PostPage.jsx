import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import MainLoader from "../components/UI/loader/MainLoader";

const PostPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
    }, []);

    return (
        <div>
            <div>Post Page with id = {params.id}</div>
            {isLoading
                ? <MainLoader />
                : <div>{post.id}. {post.title}</div>
            }
        </div>


    );
};

export default PostPage;
