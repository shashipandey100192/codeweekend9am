import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import Myoldpage from './Myoldpage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Myloginpage from './modules/auth/Myloginpage';
import Myregistorpage from './modules/auth/Myregistorpage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Myloginpage/>}></Route>  
        <Route path="registor" element={<Myregistorpage/>}></Route>
        <Route path='oldpage' element={<Myoldpage/>}></Route>
      </Routes>
    
    </BrowserRouter>
   
    
  </React.StrictMode>
);

