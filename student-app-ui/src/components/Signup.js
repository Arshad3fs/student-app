import axios from "axios";
import React, { useState } from "react";
import '../css/Signup.css';
import '../css/Signin.css';

import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {

    let navigate = useNavigate();

    const [signUp, setSignUp] = useState({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        password: undefined,
        confirmPassword: undefined
    })
    function handleChange(event) {
        const id = event.target.id;
        const value = event.target.value;
        setSignUp({ ...signUp, [id]: value })

    }
    function handleSignUp() {
        let isSignUpSuccess = true;
        if (!signUp.firstName) {
            isSignUpSuccess = false
        } else {
            isSignUpSuccess = true;
        }
        if (!signUp.lastName) {
            isSignUpSuccess = false
        } else {
            isSignUpSuccess = true;
        }
        if (!signUp.email) {
            isSignUpSuccess = false
        } else {
            isSignUpSuccess = true;
        }
        if (signUp.password != signUp.confirmPassword) {
            isSignUpSuccess = false
        } else {
            isSignUpSuccess = true;
        }
        if (!signUp.password) {
            isSignUpSuccess = false
        } else if (signUp.password.length > 1 && signUp.password == signUp.confirmPassword) {
            isSignUpSuccess = true;
        }
        if (!signUp.confirmPassword) {
            isSignUpSuccess = false
        } else if (signUp.confirmPassword > 1 && signUp.confirmPassword == signUp.password) {
            isSignUpSuccess = true;
        }
        if (isSignUpSuccess) {
        //     alert("failed")
        //     return;
        // }
        //  else {

            // setSingUp({ ...singUp, isSingUpSuccess: isSingUpSuccess })
            axios.post("http://localhost:5000/signup", {
                email: signUp.email,
                password: signUp.password,
                firstName: signUp.firstName,
                lastName: signUp.lastName
            }).then(result => {
                if (result.data.status) {
                    navigate("/student")
                    localStorage.setItem("user", JSON.stringify(result.data.user));
                    setSignUp({ ...signUp, isSingUpSuccess: isSignUpSuccess })
                } else {
                    alert("failed");
                }
            }).catch(error => {
                alert("Error handled")
            })
        }
        else{
            alert("failed")
            return;
        }
    }

    return (
        <div className="container">
            {/* <div><img src="banner.jpg" alt="suhail" id="imgage"></img></div> */}
            <div style={{ width: "30%" }}>
                <div className="sub-container">
                    {/* <div><img src="" alt="suhail" id="img"></img></div> */}
                    <div><h2 className="heading">Student Manager</h2></div>
                    <div><hr></hr></div>
                    <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
                        <div className="form">
                            <div className="padds">
                                <div>
                                    <input type="name" id="firstName" className="singup" placeholder="First Name" value={signUp.firstName} onChange={handleChange}></input>
                                    {signUp.firstName === "" ? <p className="error-msg">firstname field mandatory</p> : ""}
                                </div>
                                <div>
                                    <input type="name" id="lastName" className="singup" placeholder="Last Name" value={signUp.lastName} onChange={handleChange}></input>
                                </div>
                                <div>
                                    <input type="email" id="email" className="singup" placeholder="Email" value={signUp.email} onChange={handleChange}></input>
                                    {signUp.email === "" ? <p className="error-msg">Email field mandatory</p> : ""}

                                </div>
                                <div>
                                    <input type="password" id="password" className="singup" placeholder="Password" value={signUp.password} onChange={handleChange}></input>
                                    {signUp.password === "" ? <p className="error-msg">password field mandatory</p> : ""}
                                    {signUp.password != signUp.confirmPassword ? <p className="error-msg">password  not match</p> : ""}
                                </div>
                                <div>
                                    <input type="password" id="confirmPassword" className="singup" placeholder="Confirm Password" value={signUp.confirmPassword} onChange={handleChange}></input>
                                    {signUp.confirmPassword === "" ? <p className="error-msg">confirmPassword field mandatory</p> : ""}
                                    {signUp.confirmPassword != signUp.password ? <span className="error-msg">password not match</span> : ""}
                                </div></div>

                            <div className="checkbox">
                                <input type="checkbox" id="check" ></input>
                                <div id="head">
                                    <h5 > I accept terms & condition</h5>
                                </div>
                            </div>
                            <button id="button1" onClick={handleSignUp}>Sing Up</button>
                            <div className="li">
                                <h5 id="aaa">Already have an account ?</h5>
                                <li id="list">
                                    <Link to="/signin">Signin</Link>
                                </li> </div></div>
                    </form>
                </div>
            </div>
            <div style={{ width: "70%" }}>
                <img src="banner.jpg" alt="suhail" id="imgage"></img>
            </div>
        </div>
    )
}