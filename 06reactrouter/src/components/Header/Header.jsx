import React from 'react'
import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <header>
            <nav className="flex justify-between">
                <div>
                    <img src="https://cdn.dribbble.com/userupload/8829118/file/original-d2b181d7c52c9a9662e88c8ffe1933eb.png?resize=1200x900"  className="w-20 h-12"/>

                </div>
                <div className="">
                 <ul className="flex  flex-row justify-evenly gap-5 w-full"> 
                   <li className="">
                   <NavLink
                        to="/"
                        className={(isActive)=>{
                            isActive?'text-orange-500':'text-gray-500'
                        }}
                    >Home
                    </NavLink>
                    
                   </li>
                   <li>
                   <NavLink
                        to="/about"
                        className={(isActive)=>{
                            isActive?'text-orange-500':'text-gray-500'
                        }}
                    >About
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/contact"
                        className={(isActive)=>{
                            isActive?'text-orange-500':'text-gray-500'
                        }}
                    >
                        Contact
                    </NavLink>
                   </li>
                   <li>
                   <NavLink
                        to="/github"
                        className={(isActive)=>{
                            isActive?'text-orange-500':'text-gray-500'
                        }}
                    >
                        Github
                    </NavLink>
                   </li>

                        
                    </ul>
                </div>
                <div>
                    <button className="m-2 bg-blue-600 rounded-md border-black p-2">Signuup</button>
                    <button className="m-2 bg-blue-400 rounded-md border-black p-2">Login</button>
                </div>
            </nav>

        </header>
    )

}

export default Header;