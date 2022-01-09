import { useState, useEffect } from "react"
import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Logout from "./Logout"



export default function UserDisplay() {

    let navigate = useNavigate()
    let localData = JSON.parse(localStorage.getItem('studentData'))


    const [user, setUser] = useState([])
    const [check, setCheck] = useState({ 'isCheck': "flase" })

    useEffect(() => {
        if (!localStorage.getItem("SIGNIN"))

            navigate('/signin')
        if (localData.is_admin !== "y")
            navigate('/school')

        getUser()
    }, [])

    function deleteUser(event) {
        const id = event.target.id;
        console.log(id)
        axios.delete("http://localhost:5000/user/delete/" + id).then(result => {
            getUser()
        }).catch(error => console.error(error))
    }

    function checkValue(index, event) {
        console.log(event.target.checked, index)

        const users = [...user]
        users[index].isAdmin = event.target.checked ? 'y' : 'n';
        setUser(users)
    }
    function updateUser(index) {


        axios.put("http://localhost:5000/user/update", {
            "id": user[index].id,
            "is_admin": user[index].isAdmin
        }).then(result => {

            setUser([...user])
            setCheck({ isCheck: true })
            
        }).catch(error => {
            console.error(error)
        })
    }

    function getUser() {
        axios.get("http://localhost:5000/getAllUser").then(response => {
            setUser(response.data)
        }).catch(error => console.error(error))
    }
    return (
        <div>
            <Logout />
            {check.isCheck == true && <h4 id="success_msg" className="success"><span id="success" className="success"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" className="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg></span>User Update Successfully</h4>}

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
                    {user.map((data, index) => {
                        return (
                            <tr key={index} className="rows">
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.email}</td>
                                <td><input onClick={(event) => checkValue(index, event)} checked={data.isAdmin === 'y'} type="checkbox" /></td>
                                <td><button className="button1" onClick={() => updateUser(index)} >Save</button> <button className="button1" id={data.id} onClick={deleteUser}>Delete</button></td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </div >
    )
}
