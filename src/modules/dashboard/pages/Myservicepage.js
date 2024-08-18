import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Myservicepage() {
    const [datas,setdatas]=useState([])

    const myfetch = ()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((d)=>{
            // console.log(d.json());
            return d.json();
        }).then((mydata)=>{
            console.log(mydata);
            setdatas(mydata);
        })
    }

    useEffect(()=>{
        myfetch();
    },[]);


  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <h1>use of Fetch methods</h1>

        <button type='submit' onClick={myfetch}>fetch api data</button>
        <table className="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">username</th>
                                <th scope="col">phone</th>
                                <th scope="col">website</th>
                                <th scope="col">zipcode</th>
                                <th scope="col">city</th>
                                <th scope="col">company name</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {datas.map((d) => {
                                return (
                                    <tr key={d.id}>
                                        <th scope="row">{d.id}</th>
                                        <td>{d.name}</td>
                                        <td>{d.username}</td>
                                        <td>{d.phone}</td>
                                        <td>{d.website}</td>
                                        <td>{d.address.zipcode}</td>
                                        <td>{d.address.city}</td>
                                        <td>{d.company.name}</td>
                                        <td>
                                            <Link to={`details/${d.id}`} className='btn btn-primary btn-sm'>view</Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

            </div>
        </div>
    </div>
  )
}

export default Myservicepage