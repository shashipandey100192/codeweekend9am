import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import Myoldpage from './Myoldpage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Myloginpage from './modules/auth/Myloginpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Myerrorpage from './modules/shares/Myerrorpage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Mylandingpage from './modules/dashboard/Mylandingpage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Myloginpage/>}></Route>  
        <Route path="registor" element={<Myregistorpage/>}></Route>
        <Route path='dashboard' element={<Mylandingpage/>}></Route>
        <Route path='oldpage' element={<Myoldpage/>}></Route>
        <Route path='*' element={<Myerrorpage/>}></Route>
      </Routes>
    
    </BrowserRouter>
   
    
  </React.StrictMode>
);

