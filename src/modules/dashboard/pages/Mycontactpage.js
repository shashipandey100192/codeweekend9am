import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Mycontactpage() {
  const msg = ()=>{
    // alert("welcome to react.js");
      toast.info("welcome to custom message");
    }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
              <button type='button' className='btn btn-success' onClick={msg}>show msg</button>
          <ToastContainer position="top-left" theme="dark"/>
        </div>
      </div>
    </div>
  )
}

export default Mycontactpage