
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import RootLayout from './Components/Layouts/RootLayout';
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<RootLayout/>}>
                <Route index element={<HomePage/>}/>
            </Route>
            <Route path="login" element={<LoginPage/>}/>
        </Routes>
    </BrowserRouter>

);


