import React from 'react'
import Childpage from './Childpage'

function Parentpage() {
    var name="kumar";
    const myimg = "https://img.pikbest.com/origin/09/08/90/00KpIkbEsTnFx.jpg!f305cw";
  return (
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-12 p-5 bg-danger'>
            <h1>this is parent page {name}</h1>
            <Childpage myname={name} age={30} profile={myimg}></Childpage>
        </div>
    </div>
   </div>
  )
}

export default Parentpage