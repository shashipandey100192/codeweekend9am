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
import Homepage from './modules/dashboard/Homepage';
import Myservicepage from './modules/dashboard/pages/Myservicepage';
import Mycontactpage from './modules/dashboard/pages/Mycontactpage';
import Mychartpage from './modules/dashboard/pages/Mychartpage';
import Userpagedetails from './modules/dashboard/pages/Userpagedetails';
import Parentpage from './modules/dashboard/pages/Parentpage';
import Mymuipage from './modules/dashboard/pages/Mymuipage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Myloginpage/>}></Route>  
        <Route path="registor" element={<Myregistorpage/>}></Route>
        <Route path='dashboard' element={<Mylandingpage/>}>
              <Route  path='' element={<Homepage/>}></Route>
              <Route  path='service' element={<Myservicepage/>}></Route>
                  <Route  path='service/details/:id' element={<Userpagedetails/>}></Route>
              <Route  path='contact' element={<Mycontactpage/>}></Route>
              <Route  path='chart' element={<Mychartpage/>}></Route>
              <Route path='myprops' element={<Parentpage/>}/>
              <Route path='mui' element={<Mymuipage/>}/>

              <Route path='*' element={<Myerrorpage/>}></Route>
        </Route>
        <Route path='oldpage' element={<Myoldpage/>}></Route>
        <Route path='*' element={<Myerrorpage/>}></Route>
      </Routes>
    
    </BrowserRouter>
   
    
  </React.StrictMode>
);

