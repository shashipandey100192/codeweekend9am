import React, { useEffect, useState } from 'react'
import { userlist } from '../../Mydata';
import axios from 'axios';

function Homepage() {
    const [xyz, abc] = useState("kumar");
    const [apiv, apifun]=useState([])

    const one = () => {
        // abc("ravi singh");
        abc(prompt("enter name"));
    }

    const getapidata = ()=>{
            axios("https://jsonplaceholder.typicode.com/posts").then((x)=>{
                console.log(x.data);
                apifun(x.data);
            })

    }

    useEffect(()=>{
        getapidata();
    },[])


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <p onClick={one}>click to change</p>
                    {xyz}
                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">s.no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">phone</th>
                            </tr>
                        </thead>
                        <tbody>

                            {userlist.map((d) => {
                                return (
                                    <tr>
                                        <th scope="row">{d.sno}</th>
                                        <td>{d.name}</td>
                                        <td>{d.age}</td>
                                        <td>{d.gender}</td>
                                        <td>{d.phone}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div className='col-12'>
                    <p onClick={one}>click to change</p>
                    {xyz}
                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">userId</th>
                                <th scope="col">title</th>
                                <th scope="col">body</th>
                            </tr>
                        </thead>
                        <tbody>

                            {apiv.map((d) => {
                                return (
                                    <tr>
                                        <th scope="row">{d.id}</th>
                                        <td>{d.userId}</td>
                                        <td>{d.title}</td>
                                        <td>{d.body}</td>
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

export default Homepage