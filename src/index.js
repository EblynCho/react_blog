import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';  // npm 으로 설치 시 추가
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import BoardDetail from "./BoardDetail";
import NoPage from "./NoPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App />} >
                    <Route index element={<Main />} />
                    <Route path={"board"} element={<BoardList />} />
                    <Route path={"boardWrite"} element={<BoardWrite/>} />
                    <Route path={"boardDetail/:boardIdx"} element={<BoardDetail />} />
                    <Route path={"*"} element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
