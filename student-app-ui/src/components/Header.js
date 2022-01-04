import React from 'react'
import '../Header_Footer.css'
import Footer from './Footer';
export default function Hader() {
    return (
        <>
            <html>
                <head>
                    <title>Student App</title>

                </head>
                <body>

                    <nav className='nav-header'>
                        <div >
                            <img className="logo" src='https://github.com/Arshad3fs/student-app/blob/master/student-app-ui/public/logo.png?raw=true' alt="STudent"/>
                        </div>

                        <input type="checkbox" id="checkbox" />
                        <label for="checkbox" className="menu-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" fill="white" className="menu" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </label>
                        <ul className="elements">
                            <li><a className="active" href="\">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/feedback">Feedback</a></li>
                            <li> <a className="user" href="/student"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" fill="white" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg></a></li>
                        </ul>
                    </nav>
                </body>
            </html>
            <Footer />
        </>
    );
}
