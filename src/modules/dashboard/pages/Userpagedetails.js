import React, { Fragment,useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Userpagedetails() {
    const {id}= useParams()
    const [datas,setdatas]=useState([])

    const userrecord = ()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((d)=>{
            return d.json();
        }).then((mydata)=>{
            setdatas(mydata);
        })
    }

    useEffect(()=>{
        userrecord();
    },[]);





  return (
    <Fragment>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h2>user Id : {datas.id}</h2>
                    <hr/>
                    <h4>user userName : {datas.username}</h4>
                    <h4>user email Id: {datas.email}</h4>
                    <h4>user Website : {datas.website}</h4>
                    <h4>user Phone No : {datas.phone}</h4>
                </div>
            </div>
        </div>
    <div>User Details Page</div>

    </Fragment>
  )
}

export default Userpagedetails