import React from "react";
import About from '../pages/About';
import Page404 from '../pages/Page404';
import Posts from '../pages/Posts';
import { Route, Routes, Navigate } from 'react-router-dom';
import PostPage from "../pages/PostPage";

const AppRouter = () => {
    return (
        <Routes>

            <Route path="/about" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostPage />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="*" element={<Navigate replace to="/404" />} />

        </Routes>
    );
};

export default AppRouter;
