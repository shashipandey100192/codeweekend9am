import React from 'react'
import Conditionreturn from './Conditionreturn'

function Childpage(props) {
  return (
    <div className='container-fluid'>
    <div className='row'>
        <div className='col-12 p-5 bg-info'>
            <h1>this is child page</h1>
            <h2>{props.myname} {props.age}</h2>
            <img src={props.profile} alt='profil pic'/><br/>
            {/* <button type='button' onClick={condifunc} className='btn btn-success mt-5'>conditional return</button> */}
            <Conditionreturn/>

        </div>
    </div>
   </div>
  )
}

export default Childpage