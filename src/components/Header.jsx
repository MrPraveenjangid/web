import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header id="header">
                <div className="logo">
                    <span id="logo">Web Developer </span>
                </div>
                <input type="checkbox" id="click" />
                <label htmlFor="click" className="mainicon">
                    <div className="menu" id="menu">
                        <i className="bi bi-list"></i>
                    </div>
                </label>
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/Skills"}>Skills</Link>
                    <Link to={"/Project"}>Projects</Link>
                <span className="fonts" onClick={"hello"} style={{fontSize:"18px"}}>mode</span>
                </nav>
            </header>
        </>
    )
}
