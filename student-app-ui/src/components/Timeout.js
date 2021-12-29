import React from 'react'
import { Navigate } from 'react-router-dom';
import Signin from './Signin';

export default function timeout(props) {

    let minutes = props.min;
    let seconds = props.sec;
    let setMin = props.setMin;
    let setSec = props.setSec
    function updateTimeOut(props) {
        setMin(minutes = 15);
        localStorage.setItem("SESSION_MINUTES", minutes = 15);
        setSec(minutes = 0);
        localStorage.setItem("SESSION_SECONDS", seconds = 0);
    }
    return (
    
                <div className='timeout-container'>
                    <div className='sub-container1'>

                        <div className="timeout-header">
                            <h1 timeout-header style={{ margin: "0px" }}>Session Timeout</h1>
                            <hr></hr>
                        </div>
                        <p className='timeout-message'>Your session will be end in </p><p className="mins-count">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
                        <div className='time-btns'>
                            <button className='pop-okbtn'><a href="/signin">SignOut</a></button>
                            <button className='update-btn' onClick={updateTimeOut}>Update Session</button>
                        </div>
                    </div>
                </div> 
            
    )
}