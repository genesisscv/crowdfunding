import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
    return (
    <nav>
        <div>
            <Link to="/"><div className="logo"/> <img src={require('./main-logo.png')}/></Link>
        </div>
        <ul>
            
            <li>
                <Link to="login"> Log in</Link>
            </li>
            <li>
                <Link to="Signup"> Sign up</Link>
            </li>
        </ul>
    </nav >
    );
}

export default Nav;