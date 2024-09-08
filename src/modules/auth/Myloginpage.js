import React from 'react'
import { Link } from 'react-router-dom'

function Myloginpage() {
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-5 p-5 border bg-light shadow rounded'>
          <div className='container-fluid'>
            <div className='row'>
            <div className='col-12 text-center'>
                <div class="mb-3">
                <h2>Login User</h2>
                </div>
              </div>
              <div className='col-12'>
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input type="email" class="form-control"/>
                </div>
              </div>
              <div className='col-12'>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control"/>
                </div>
              </div>
              <div className='col-12 text-center'>
                <div class="mb-3">
                 <button className='btn btn-success'>Login</button>
                 <Link to="registor">New User Registor</Link>
                 <Link to="dashboard">dashboard</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


  )
}

export default Myloginpage