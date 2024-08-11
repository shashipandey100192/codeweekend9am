import React from 'react'
import Mynavbar from '../shares/Mynavbar'
import Mysidebar from '../shares/Mysidebar'
import Myfooter from '../shares/Myfooter'

function Mylandingpage() {
  return (
    <div className='container-fluid'>
        <div  className='row shadow g-0 fixed-top'>
            <div className='col'>
                <Mynavbar/>
            </div>
        </div>

        <div  className='row cmt'>
            <div className='col-md-2'>
              <Mysidebar/>
            </div>
            <div className='col-md-10'>
               <div className="page">


               </div>
                <Myfooter/>
            </div>
        </div>
    </div>
  )
}

export default Mylandingpage