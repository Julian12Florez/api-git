// @flow 
import * as React from 'react';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Profile from '../components/Profile';
import Home from '../pages/Home';

const RouterRoot = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:user_login" element={<Profile />} />
            </Routes>
        </BrowserRouter>
      );
};

export default RouterRoot;