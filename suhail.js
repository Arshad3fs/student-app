
import React, { useState } from "react";
import './singup.css';
import { Link } from 'react-router-dom';
 export default function SingUp(){
     const [singUp,setSingUp]=useState({
             firstName:undefined,
             lastName:undefined,
             email:undefined,
             password:undefined,
             confirmPassword:undefined
     })
      function handleChange(event){
          const id=event.target.id;
          const value=event.target.value;
          setSingUp({...singUp,[id]:value})

      }
     function handleSingUp(){
         let isSingUpSuccess=true;
         if(!singUp.firstName){
              isSingUpSuccess=false
         }else{
             isSingUpSuccess=true;
         }
         if(!singUp.lastName){
            isSingUpSuccess=false
       }else{
           isSingUpSuccess=true;
       }
       if(!singUp.email){
        isSingUpSuccess=false
   }else{
       isSingUpSuccess=true;
   }
       if(singUp.password != singUp.confirmPassword){
           isSingUpSuccess=false
       }else{
               isSingUpSuccess=true;
      }
      if(!singUp.password){
        isSingUpSuccess=false
   }else if(singUp.password.length>1 && singUp.password==singUp.confirmPassword){
       isSingUpSuccess=true;
   }
   if(!singUp.confirmPassword){
    isSingUpSuccess=false
}else if(singUp.confirmPassword >1 && singUp.confirmPassword==singUp.password){
   isSingUpSuccess=true;
}
  setSingUp({...singUp,isSingUpSuccess:isSingUpSuccess})

    }

    return(
         <div className="container">
             <div><img src="banner.jpg" alt="suhail" id="imgage"></img></div>
         <div className="sub-container">
             <div><img src="" alt="suhail" id="img"></img></div>
         <div><h2 className="heading">Student Manager</h2></div>
         <div><hr></hr></div>
          <form autoComplete="of">
              <div className="form">
                  <div className="padds">
              <div>
                  <input type="name" id="firstName" className="singup" placeholder="First Name" value={singUp.firstName} onChange={handleChange}></input>
                  {singUp.firstName==="" ? <p className="error-msg">firstname field mandatory</p>:"" }
              </div>
              <div>
                  <input type="name" id="lastName" className="singup" placeholder="Last Name" value={singUp.lastName} onChange={handleChange}></input>
              </div>
              <div>
                  <input type="email" id="email" className="singup" placeholder="Email" value={singUp.email} onChange={handleChange}></input>
                  {singUp.email==="" ? <p className="error-msg">Email field mandatory</p>:""}
                   
              </div>
              <div>
                  <input type="password" id="password" className="singup" placeholder="Password" value={singUp.password} onChange={handleChange}></input>
                  {singUp.password==="" ? <p className="error-msg">password field mandatory</p>:""}
                   {singUp.password!=singUp.confirmPassword ? <p className="error-msg">password  not match</p>:""}
              </div>
              <div>
                  <input type="password" id="confirmPassword" className="singup" placeholder="Confirm Password" value={singUp.confirmPassword} onChange={handleChange}></input>
                  {singUp.confirmPassword==="" ? <p className="error-msg">confirmPassword field mandatory</p>:""}
                  {singUp.confirmPassword!=singUp.password ? <span className="error-msg">password not match</span>:""}
              </div></div>

              <div className="checkbox">
             <input type="checkbox" id="check" ></input> 
             <div id="head">
             <h5 > I accept terms & condition</h5>
             </div>
             </div>
             <button id="button1" onClick={handleSingUp}>Sing Up</button>
             <div className="li">
             <h5 id="aaa">Already have an account ?</h5>
             <li id="list">
              <Link to="/SingIn">SingIn</Link>
             </li> </div></div>
          </form>
        

         </div>
         </div>
    )
 }
          
                   
    body{
     background-color:rgb(235, 93, 50);
     box-sizing: border-box;
}
.container{
    padding:10px;
}
.sub-container{
    width: 20%;
     background-color: white;
     text-align: center;
     padding: 10px;
     margin-top: -275px;
     margin-left:280px;
     border-radius: 5%;

}
.form{
    margin-top: 6%;
}
.checkbox{
       display: flex;
       flex-direction: row;
       margin-top:-8%;
       
}
#check{
    margin-left: 6%;
    margin-top: 9%;
}
#firstName{
       padding:10px;
       width: 80%;
       border-top: none;
       border-left:none;
       border-right: none;
       border-bottom: 2%;
     
}

#lastName{
    padding:10px;
       width: 80%;
       border-top: none;
       border-left:none;
       border-right: none;
       border-bottom: 2%;
       margin-top: 2%;
}
#email{
    padding:10px;
       width: 80%;
       border-top: none;
       border-left:none;
       border-right: none;
       border-bottom: 2%;
       margin-top: 2%;
}
#password{
    padding:10px;
       width: 80%;
       border-top: none;
       border-left:none;
       border-right: none;
       border-bottom: 1%;
       margin-top: 2%;
}
#confirmPassword{
    padding:10px;
       width: 80%;
       border-top: none;
       border-left:none;
       border-right: none;
       border-bottom: 2%;
       margin-top: 2%;
}
.li{
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    margin-top: -1%;
}
#button1{
    margin-top:-11px;
    width: 90%;
}
#list{
     list-style: none;
     margin-left: 20%;
     margin-top: 8%;
}
a{
    text-decoration: none;
}
#img{
    margin-top: 5%;
    margin-left: -75%;
}
#head{
    margin-left: 2%;
}
#imgage{
       width:20%;
       margin-top: 60px;
       height: 100%;
}
                   
             
