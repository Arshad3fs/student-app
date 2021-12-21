import React, { useState } from "react";
import '../css/Signup.css';
import { Link } from 'react-router-dom';
 export default function SignUp(){
     const [information,setinformation]=useState({
             firstName:undefined,
             lastName:undefined,
             email:undefined,
             password:undefined,
             confirmPassword:undefined
     })
      function handleChange(event){
          const id=event.target.id;
          const value=event.target.value;
          setinformation({...information,[id]:value})

      }
     function handleinformation(){
         let isinformationSuccess=true;
         if(!information.firstName){
              isinformationSuccess=false
         }else{
             isinformationSuccess=true;
         }
         if(!information.lastName){
            isinformationSuccess=false
       }else{
           isinformationSuccess=true;
       }
       if(!information.email){
        isinformationSuccess=false
   }else{
       isinformationSuccess=true;
   }
       if(information.password != information.confirmPassword){
           isinformationSuccess=false
       }else{
               isinformationSuccess=true;
      }
      if(!information.password){
        isinformationSuccess=false
   }else if(information.password.length>1 && information.password==information.confirmPassword){
       isinformationSuccess=true;
   }
   if(!information.confirmPassword){
    isinformationSuccess=false
}else if(information.confirmPassword >1 && information.confirmPassword==information.password){
   isinformationSuccess=true;
}
  setinformation({...information,isinformationSuccess:isinformationSuccess})

    }

    return(
         <div className="container1">
             {/* <div><img src="banner.jpg" alt="suhail" id="imgage"></img></div> */}
         <div className="sub-container1">
             {/* <div><img src="" alt="suhail" id="img"></img></div> */}
         <div><h2 className="heading1">Student Manager</h2></div>
         <div><hr></hr></div>
          <form autoComplete="of">
              <div className="form">
                  <div className="padds">
              <div>
                  <input type="name" id="firstName" className="information1" placeholder="First Name" value={information.firstName} onChange={handleChange}></input>
                  {information.firstName==="" ? <p className="error-msg">firstname field mandatory</p>:"" }
              </div>
              <div>
                  <input type="name" id="lastName" className="information1" placeholder="Last Name" value={information.lastName} onChange={handleChange}></input>
              </div>
              <div>
                  <input type="email" id="email" className="information1" placeholder="Email" value={information.email} onChange={handleChange}></input>
                  {information.email==="" ? <p className="error-msg">Email field mandatory</p>:""}
                   
              </div>
              <div>
                  <input type="password" id="password" className="information1" placeholder="Password" value={information.password} onChange={handleChange}></input>
                  {information.password==="" ? <p className="error-msg">password field mandatory</p>:""}
                    {information.password!=information.confirmPassword ? <p className="error-msg">password  not match</p>:""} 
              </div>
              <div>
                  <input type="password" id="confirmPassword" className="information1" placeholder="Confirm Password" value={information.confirmPassword} onChange={handleChange}></input>
                  {information.confirmPassword==="" ? <p className="error-msg">confirmPassword field mandatory</p>:""}
                  {information.confirmPassword!=information.password ? <span className="error-msg">password not match</span>:""}
              </div></div>

              <div className="checkbox1">
             <input type="checkbox" id="check1" ></input> 
             <div id="bbb">
             <h5 > I accept terms & condition</h5>
             </div>
             </div>
             <button id="button1" onClick={handleinformation}>Sing Up</button>
             <div className="li1">
             <h5 id="aaa">Already have an account ?</h5>
             <li id="list1">
              <Link to="/SingIn">SingIn</Link>
             </li> </div></div>
          </form>
        

         </div>
         </div>
    )
 }