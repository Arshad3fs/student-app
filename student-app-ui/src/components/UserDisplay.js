import { useState,useEffect } from "react"
import React from 'react'
import axios from "axios"
import {useNavigate}from'react-router-dom'


export default function UserDisplay() {

    let navigate = useNavigate()

    const [user, setUser] = useState([])

    useEffect(()=>{
        if(!localStorage.getItem("SIGNIN"))

        navigate('/signin')

        getUser()
    },[])

    function getUser(){
        axios.get("http://localhost:5000/getAllUser").then(response=>{
            setUser(response.data)
        }).catch(error=>console.error(error))
    }
    return (
        <div>
            <table className='Table'>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>EmailId</th>
                        <th>isAdmin</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                {user.map((data,index)=>{
                    return(
                        <tr key={index} className="rows">
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td><input type="checkbox" /></td>
                            <td><button className="button1">Action</button></td>
                        </tr>
                    )
                })}

            </tbody>

        </table>
        </div >
    )
}
