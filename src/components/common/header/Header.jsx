import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";
const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
            <ul className={click ? "mobile-nav" : "flexSB"} onclick={() => setClick(false)}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="start">
            <Link to='/signup'>SIGN UP</Link>
            </div>
            <button className="toggle" onClick={() => setClick(!click)}>
                {click ? <i className="fa fa-times"></i> : <i className ="fa fa-bars"></i>}
            </button>
        </nav>
      </header>
    </>
  )
}

export default Header