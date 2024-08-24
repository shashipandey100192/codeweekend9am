import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'


function Myregistorpage() {

  const {register,handleSubmit,formState: { errors }} = useForm();

const  mysubmit = (myform)=>{
  console.log(myform);
}



  return (
    <form onSubmit={handleSubmit(mysubmit)}>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8 p-5 border bg-light shadow rounded'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className="mb-3">
                  <h2>User Registor Page</h2>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Fullname</label>
                  <input type="text" className="form-control" {...register("fullname",{required:true,minLength:5})}/>
                  {/* {errors.fullname && <p className='text-danger'>fullName id required! </p>} */}

                  {errors.fullname?.type==="required" && <p className='text-danger'>fullName id required! </p>}
                  {errors.fullname?.type==="minLength" && <p className='text-danger'>Minlength is required 5 </p>}

                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" {...register("email")}/>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-control" {...register("phone")}/>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Gender</label><br/>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" value="male" {...register("gender")}/>
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" value="female" {...register("gender")}/>
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">DOB</label>
                  <input type="date" className="form-control" {...register("dob")}/>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Course</label>
                  <select className='form-select' {...register("course")}>
                  <option>MERN</option>
                  <option>MEAN</option>
                  <option>JAVA</option>
                  <option>EXCEL</option>
                  <option>PHP</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Create Password</label>
                  <input type="password" className="form-control" {...register("pass")}/>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Re-Enter Password</label>
                  <input type="password" className="form-control" {...register("rpass")}/>
                </div>
              </div>
              
              <div className='col-md-12'>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea className='form-control' {...register("address")}></textarea>
                </div>
              </div>

              <div className='col-12 text-center'>
                <div className="mb-3">
                  <button className='btn btn-success'>Registor Now</button>
                  <button className='btn btn-danger ms-3'>Cancel</button>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </form>

  )
}

export default Myregistorpage