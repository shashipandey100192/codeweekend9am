import React from 'react'
import { Link } from 'react-router-dom'

function Myregistorpage() {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8 p-5 border bg-light shadow rounded'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div class="mb-3">
                  <h2>User Registor Page</h2>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Fullname</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input type="email" class="form-control" />
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Phone</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Gender</label><br/>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" value="male" />
                    <label class="form-check-label">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" value="female" />
                    <label class="form-check-label">Female</label>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">DOB</label>
                  <input type="date" class="form-control" />
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Course</label>
                  <select className='form-select'>
                  <option>MERN</option>
                  <option>MEAN</option>
                  <option>JAVA</option>
                  <option>EXCEL</option>
                  <option>PHP</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Create Password</label>
                  <input type="password" class="form-control" />
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Re-Enter Password</label>
                  <input type="password" class="form-control" />
                </div>
              </div>
              
              <div className='col-md-12'>
                <div class="mb-3">
                  <label class="form-label">Address</label>
                  <textarea className='form-control'> type your address...</textarea>
                </div>
              </div>

              <div className='col-12 text-center'>
                <div class="mb-3">
                  <button className='btn btn-success'>Registor Now</button>
                  <button className='btn btn-danger ms-3'>Cancel</button>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Myregistorpage