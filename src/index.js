import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc, { Myabout1, Myimg, Mypage, Mypage1 } from './About';
import "./style.css";
import Contactpage from './Contactpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contactpage/>
   <Abc></Abc>
   <Myabout1></Myabout1>
   <Mypage></Mypage>
   <Mypage1></Mypage1>
   <Myimg></Myimg>
  
  </React.StrictMode>
);

