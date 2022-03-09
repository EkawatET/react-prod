import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from "./components/NavBar";
import CreateItem from "./components/CreateItem";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import AddItem2 from "./components/AddItem2";

ReactDOM.render(

  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path = "/" element={<App />}/>
      <Route path="CreateItem" element={<CreateItem />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
