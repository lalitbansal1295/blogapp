import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#4da6ff"}}>
                <a className="navbar-brand" >BLOG APP</a>
                <div className="container">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>


                        </ul>


                    </div>
                    
                    <NavLink className="btn btn-outline-light" to="/blog/add">Add Blog</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
