import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './About/About';
import EmrSafety from './Emr/Emr';
import Blog from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Addblog from './Addblog.js/addblog';
import Workplace from './Emr/Workplace';
import Institutions from './Emr/Institutions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/emrSafety" element={<EmrSafety/>}/>
    <Route path="/blogs" element={<Blog/>}/>
    <Route path="/contact" element={<Contact/>}/>
     <Route path="/workplace" element={<Workplace/>}/>
     <Route path="/institute" element={<Institutions/>}/>
  </Routes>
  </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*   <Route path="/addblog" element={<Addblog/>}/>*/